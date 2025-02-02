# Authorization

In order to receive data from the API you must authenticate yourself. You can authenticate by using the HTTP Authorization header. This header must include your API key, which will be sent with the request.

> <FAIcon icon="fa-solid fa-lightbulb" size="1.2x" /> If you don't have a valid API-Key yet, you can create one in the Settings in Decupla. Learn more about how the create API-Keys in the User Documentation

Your API key must be sent as a Bearer token in the following format:

```
Bearer kKrXN8q3N7vOeDMaJMd9hWSSy4i2STNn
```

Here are some examples how the use the authentication in your project when fetching the api:

``` javascript title="JavaScript (Fetch API)"

fetch('https://your-decupla-url.com/api/content/all', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer kKrXN8q3N7vOeDMaJMd9hWSSy4i2STNn',
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

```

```javascript title="PHP (cURL)"
<?php
$apiUrl = "https://your-decupla-url.com/api/content/all";
$apiKey = "kKrXN8q3N7vOeDMaJMd9hWSSy4i2STNn";

$ch = curl_init($apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Authorization: Bearer $apiKey",
    "Content-Type: application/json"
]);

$response = curl_exec($ch);
curl_close($ch);

$data = json_decode($response, true);
print_r($data);
```

If your API key is valid, the API will return the requested data with an HTTP status code of `200 Ok`. Otherwise, it will return a error message with an HTTP status code of `401 Unauthorized`.