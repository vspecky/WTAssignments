<?php
class RestaurantData {
    private $menu;

    function __construct($data) {
        $this->menu = $data;
    }

    public function getItemByID($id) {
        $res = 'Not found';
        foreach($this->menu as $item) {
            if ($item['id'] == $id) {
                $res = $item;
                break;
            }
        }

        return json_encode($res);
    }

    public function getItemsInPriceRange(float $low, float $high) {
        $items = [];

        foreach($this->menu as $item) {
            $price = floatval($item['price_large']);
            if ($price >= $low && $price <= $high) {
                array_push($items, $item);
            }
        }

        if (sizeof($items) === 0) {
            $items = 'Not found';
        }

        return json_encode($items);
    }
}
?>
