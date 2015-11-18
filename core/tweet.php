<?php
ini_set('display_errors', 1);
require_once('./lib/TwitterAPIExchange.php');

$settings = array(
    'oauth_access_token' => "870373543-khLligSdcxAp0JORyR6ekrLxAfeAP5Zb3Qjcfyg9",
    'oauth_access_token_secret' => "hP8VOjSHBFRAlKGoq7Qgp3Fo3I9a2JmbUbn7jZT8AQeQW",
    'consumer_key' => "mpdEMJWT5S6Z3ILJbl0sUAROA",
    'consumer_secret' => "XYNQEjZ1ChypOKq61gOh8Q5bNoN4gcDAaJWiuCqdluZkQ90ALu"
);

$url = 'https://api.twitter.com/1.1/statuses/user_timeline/mindsersit.json';
$getfield = '?count=1&include_rts=1';
$requestMethod = 'GET';

$twitter = new TwitterAPIExchange($settings);
echo $twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest();