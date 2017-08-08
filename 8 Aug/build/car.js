var Car = (function () {
    function Car(model, price) {
        this.model = model;
        this.price = price;
    }
    Car.prototype.showCar = function () {
        var str = this.price;
        var x = 10;
        x = "hello";
        console.log(this.model + ' - ' + this.price);
        //tuple
        var arr = [1, 3, "hello", true];
        //Array
        var numArray = [4, 66, 8, 9];
        numArray.forEach(function (num) {
            console.log(num);
        });
        numArray.forEach(function (num) {
            console.log(num);
        });
    };
    return Car;
}());
