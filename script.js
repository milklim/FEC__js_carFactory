var count = 0;
(function run() {
    count++;
    // var cars = carsOrder('citroen', 'c4', 5, 'red');
    // var cars = carsOrder('citroen', [
    //     {model: 'c2', amount: 2, color: 'red'},
    //     {model: 'c3', amount: 3, color: 'blue'},
    //     {model: 'c4', amount: 1, color: 'orange'},
    // ]);
    // console.log(cars);
})();

function makeOrder(form) {
    console.log(form.brand.value);
}

function addRow() {
    var form = document.getElementsByTagName('form')[0];

    var model = document.createElement("input");
    model.setAttribute('type',"text");
    model.setAttribute('name',"model" + count);

    var num = document.createElement("input");
    num.setAttribute('type',"number");
    num.setAttribute('name',"amount" + count);

    var color = document.createElement("input");
    color.setAttribute('type',"text");
    color.setAttribute('name',"color" + count);

    var bre = document.createElement('br');

    form.appendChild(model);
    form.appendChild(num);
    form.appendChild(color);
    form.appendChild(bre);

    count++;
}

function carsOrder(brand, order) {
    var result = [];

    order.forEach(function(item) {
        for(var i = 0; i < item.amount; i++){
            result.push(makeCar(brand, item.model, item.color));
        }
    });

    function makeCar(brand, model, color) {
        var car = new Object();
        car.brand = brand;
        car.model = model;
        car.color = color;
        return car;
    }

    return result;
}