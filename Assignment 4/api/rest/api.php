<?php
header("Content-type: application/json");
require "restdata.php";

function getData() {
	$dataStr = file_get_contents("restaurant.json");
	return json_decode($dataStr, true);
}

function getResponse($code, $data) {
	return json_encode(
		(object) [
			'code' => $code,
			'response' => $data
		],
		JSON_UNESCAPED_SLASHES
	);
}

if (isset($_GET['id']) || (isset($_GET['low']) && isset($_GET['high']))) {
	$data = getData()['menu_items'];
	try {
		$menu = new RestaurantData($data);
	} catch (Exception $e) {
		echo getResponse('500', $e->getMessage());
		return;
	}
} else return;

if (isset($_GET['id'])) {
	$id = $_GET['id'];
	echo getResponse('200', $menu->getItemByID($id));
	return;
}

$low = floatval($_GET['low']);
$high = floatval($_GET['high']);

echo getResponse('200', $menu->getItemsInPriceRange($low, $high));
?>
