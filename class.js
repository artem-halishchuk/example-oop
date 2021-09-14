class Animal {
    constructor(name) {
        this.name = name;
    }
    sleep() {
        console.log(this.name + ' sleeping...')
    }
}
class Dog extends Animal { // = Dog.prototype = Object.assign({}, Animal.prototype);
    constructor(name) {
        super(name); // = Animal.call(this, name);
    }
    wow() { //создан дополнительный метод для Dog
        console.log(`${this.name} wow wow...`);
    }
    sleep() { //можно переопределять метод, с наследованием если есть super, иди если не будет,
              //то можно определить sleep по своему
        super.sleep();
        console.log('Zzzzz...');
    }
}
//создание и вызов
let dog = new Dog('Sharik');
dog.sleep();
dog.wow();

class Component {
    constructor(selector) {
        this.baseElem = document.querySelector(selector);
    }
    _get(selector) { //для получения одного дочернего элемента
        return this.baseElem.querySelector(selector);
    }
    _getAll(selector) { //для получения всех дочерниъх элемнтов
        return this.baseElem.querySelectorAll(selector);
    }
    _liveEvent(selector, eventName,handler) { //handler - обраюотчик события, что делать при наступлении события
        this.baseElem.addEventListener(eventName, (e) => {
            if(!e.target.matches(selector)) return;
            handler.call(this, e);
        });
    }
}
class ButtonHello extends Component {
    constructor(selector) {
        super(selector);
        this._liveEvent(selector,'click', this.show);
    }
    show() {
        alert('hello');
    }
}
document.addEventListener('DOMContentLoaded', function () {
    let button = new ButtonHello('.b');
})

//выше приведен эквивалент того, что ниже, класс - конструктор
// function Animal(name) {
//     this.name = name;
// }
// Animal.prototype.sleep = function () {
//     console.log(this.name + ' sleeping...');
// }
//
// function Dog (name) {
//     Animal.call(this, name); // пробрасываем name из Dog в Animal
// }
// Dog.prototype = Object.assign({}, Animal.prototype); //асайним методы из Animal в Dog
// Dog.prototype.wow = function () {
//     console.log(this.name + ' wow wow...');
// }
// //Dog.__proto__.sleep().call(this); ????????

//под каждый элемент интерфейса делать class, а конструктор принемал селектор родительского элемента

