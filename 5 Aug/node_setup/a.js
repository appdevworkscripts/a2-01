var Student = (function () {
    function Student(name, roll) {
        this.name = name;
        this.roll = roll;
    }
    Student.prototype.show = function () {
        console.log(this.name + '-' + this.roll);
    };
    return Student;
}());
function sum(a, b) {
    b = b || 0;
    return a + b;
}
console.log(sum(9, 8));
console.log(sum('Hello', 'Bye'));
