let f = (function () {
    console.log('anonymous function');
    //это называетя инкасуляцией
    let x = 0; //данная переменая не доступна снаружи, за пределами анонимной функции
    return function () { //анонимная функция вовращает функцию
        return x++; //для данной вложеной анонимной функции переменая x видна
    }
})();
console.log(f); //выведится функция [Function (anonymous)]
console.log(f()); //выведится результат работы функции
for (let i = 0; i<3; i++) console.log(f());

let Animal = (function () {
    function getSleepText (name) { //данная функция не видна снаружи, это называется замыканием
        return `${this.name} sleeping`;
    }
    function getHome () {
        return `${this.home}`;
    }
    function Animal (name, home) { //function Animal и let Animal это разные Animal
        this.name = name;
        this.home = home;
    }
    Animal.prototype.sleep = function () {
        return getSleepText.call(this) + ' Zzz... , is ' + getHome.call(this) + ' animal.';
        //return getSleepText(this.name) + ' Zzz...';
    }

    return Animal;
})();
let a = new Animal('Sharik', 'home');
console.log(a.sleep());

function sum () {
    this.a = 5;
    console.log(this + this.a);
}
sum = sum.bind(10);
sum();
