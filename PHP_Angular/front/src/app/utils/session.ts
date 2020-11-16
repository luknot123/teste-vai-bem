export class Session {
  constructor() {
  }

  criarSession(name, value, duration) {
        var cookie = name + "=" + encodeURI(value) +
        ((duration) ? "; duration=" + duration : "");
        document.cookie = cookie;
  }
  getSession(name) {
    var cookies = document.cookie;
    var prefix = name + "=";
    var begin = cookies.indexOf("; " + prefix);

    if (begin == -1) {

        begin = cookies.indexOf(prefix);

        if (begin != 0) {
            return null;
        }

    } else {
        begin += 2;
    }

    var end = cookies.indexOf(";", begin);

    if (end == -1) {
        end = cookies.length;
    }

    return decodeURI(cookies.substring(begin + prefix.length, end));
  }
  deleteSession(name) {
    if (this.getSession(name)) {
      document.cookie = name + "=" + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }
  }



}
