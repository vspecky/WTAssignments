let data;

$(document).ready(async () => {
    data = (await $.get("https://davids-restaurant.herokuapp.com/menu_items.json")).menu_items;
    
    for (const name of data.map(dish => dish.name)) {
        $("#menu").append(`<option value="${name}">${name}</option>`)
    }

    data.push({
        id: "No Data",
        short_name: "No Data",
        name: "No Data",
        description: "No Data",
        price_small: "No Data",
        price_large: "No Data",
        small_portion_name: "No Data",
        large_portion_name: "No Data"
    })
});

$("#menu").on('change', function() {
    let dish = data.find(d => d.name === this.value);

    for (const [field, value] of Object.entries(dish)) {
        $(`#${field}`).html(value);
    }
})