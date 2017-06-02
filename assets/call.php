<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>

<body>

$bdb = new Pintlabs_Service_Brewerydb(52840d61aed0d4d4dc14a975bf3092c4);
$bdb->setFormat('php'); // if you want to get php back.  'xml' and 'json' are also valid options.

Then you can call the API:

try {
    // The first argument to request() is the endpoint you want to call
    // 'brewery/BrvKTz', 'beers', etc.
    // The third parameter is the HTTP method to use (GET, PUT, POST, or DELETE)
    $results = $bdb->request('beers', $params, 'GET'); // where $params is a keyed array of parameters to send with the API call.
} catch (Exception $e) {
    $results = array('error' => $e->getMessage());
}


</body>
</html>


