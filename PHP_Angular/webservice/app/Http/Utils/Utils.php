<?php
namespace App\Http\Utils;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Log;

class Utils {

    public static function getLatlng($endereco) {
        $client = new Client();
        $response = $client->request('GET', 'https://maps.googleapis.com/maps/api/geocode/json?address='.$endereco.'&key=AIzaSyBnFYX4Kp8mSXXvR0-JUYqEJUgB_FcYkSc');
	    $statusCode = $response->getStatusCode();
        $obj;
        if($statusCode==200){
            $body = $response->getBody()->getContents();
            $obj = json_decode($body,true);

            return $obj;
        }
        return $obj;
    }

    
}
