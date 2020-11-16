FROM php:7.3-apache

RUN apt-get update

# 1. development packages
RUN apt-get update && apt-get install -y \
        unzip \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libpng-dev \
        libaio1 \
        libwebp-dev \
        libgmp-dev \
        libonig-dev \
        libpq-dev \
        libcurl4-openssl-dev \
        libxml2-dev \
        libzip-dev \
        libbz2-dev \
        nodejs \
        npm \
    && docker-php-ext-install -j$(nproc) iconv gettext \
    && docker-php-ext-install pgsql pdo_pgsql \
    && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
    && docker-php-ext-install -j$(nproc) gd \
    && docker-php-ext-install pdo pdo_mysql mysqli bcmath calendar curl exif mbstring tokenizer pcntl xml zip pdo_pgsql bz2 intl iconv opcache

# Set the timezone
ENV TZ=America/Fortaleza
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# 2. apache configs + document root
RUN echo "ServerName laravel-app.local" >> /etc/apache2/apache2.conf

ENV APACHE_DOCUMENT_ROOT=/var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# 3. mod_rewrite for URL rewrite and mod_headers for .htaccess extra headers like Access-Control-Allow-Origin-
RUN a2enmod rewrite headers

# 4. start with base php config, then add extensions
RUN mv "$PHP_INI_DIR/php.ini-development" "$PHP_INI_DIR/php.ini"

# 5. composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# 6. we need a user with the same UID/GID with host user
# so when we execute CLI commands, all the host file's permissions and ownership remains intact
# otherwise command from inside container will create root-owned files and directories
ARG uid
RUN useradd -G www-data,root -u $uid -d /home/devuser devuser
RUN mkdir -p /home/devuser/.composer && \
    chown -R devuser:devuser /home/devuser

RUN mkdir -p /var/www/html/storage/framework/sessions && \
    chown -R devuser:devuser /var/www/html/storage/framework/sessions

RUN mkdir -p /var/www/html/storage/framework/cache && \
    chown -R devuser:devuser /var/www/html/storage/framework/cache

RUN mkdir -p /var/www/html/storage/framework/testing && \
    chown -R devuser:devuser /var/www/html/storage/framework/testing

RUN mkdir -p /var/www/html/storage/framework/views && \
    chown -R devuser:devuser /var/www/html/storage/framework/views

CMD bash -c "composer install && php artisan migrate && php artisan db:seed && php artisan serve --host 0.0.0.0 --port 8000"

EXPOSE 8000