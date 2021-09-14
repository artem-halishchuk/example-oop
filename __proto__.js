//__proto__
// объект dog наследует объект animal
let animal = {
    name: 'vasia',
    eat() {
        console.log(this.name + ' eating...');
    },
    sleep: function () {
        console.log(this.name + ' sleeping...');
    }
}
let dog = { //это объект дочерний
    __proto__: animal, //свойство __proto__ вручную ставить не желеательно
                         //по стандарту его нужно ставить через конструктор

                         //__proto__: animal, - прототипирование объекта в объекте
                         //__proto__: new A(), - прототипирование консторуктора в объекте
                         //this.__proto__ = new A(), - прототипирование консторуктора в консторукторе
    name: 'petia',  //теперь свойство name будет браться не из прототипа,
                    //а изи dog, ЭТО НАЗЫВАЕТСЯ ПОЛИМОРФИЗМ
    wow() {
        console.log(this.name + ' wow wow...')
    }
}
animal.eat();
animal.sleep();

dog.eat();
dog.sleep();

//конструктор DuckConstructor наследует конструктор AnimalConstructor
function AnimalConstructor(name) {
    this.name = name;
    this.eat = function () {
        console.log(this.name +' eating...');
    };
    this.sleep = function () {
        console.log(this.name + " sleeping...");
    };
}
function DuckConstructor(name) {
    this.name = name;
    this.__proto__ = new AnimalConstructor(name);
    this.fly = function () {
        console.log(this.name + ' flying...');
    }
}
//DuckConstructor.__proto__ = new AnimalConstructor(name);

let duck = new DuckConstructor('Glasha');
duck.eat();
duck.sleep();
duck.fly();