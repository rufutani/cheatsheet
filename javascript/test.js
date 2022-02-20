const Judan = function (firstName, lastName, period, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.period = period;
    this.year = year;
    this.title = '十段';
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    };
};

const judan25 = new Judan('Bungo', 'Fukusaki', 25, 1986);
console.log(judan25.getFullName());

judan25.sayHelloTo = function (someone) {
    console.log(`Hello, ${someone}-san!`);
};
judan25.sayHelloTo('Habu');

const judan24 = new Judan('Kunio', 'Yonenaga', 24, 1985);
console.log(judan24.getFullName());
// judan24.sayHelloTo('Yonenaga');

delete judan25.getFullName;
console.log(judan25.getFullName());