//prototype
//МЕТОДЫ НУЖНО ВЫНОСИТЬ В ПРОТОТИПЫ, В РЕЗУЛЬТАТЕ ОНИ НЕ КОПИРУЮТСЯ В НОВОСОЗДАННЫЙ ОБЪЕКТБ А ССЫЛАЮТСЯ К НЕМУ НА УЧАСТОК ПАМЯТИ
let animal = { //это обьект родительский
    name: 'vasia',  //т.к объект animal есть прототипом для dog,
                    //то если свойства name не будет в dog свойство
                    //name возьмется из протототипа animal
    eat() { // eat: function()
        console.log(this.name + ' eating...');
    },
    sleep() {
        console.log(this.name + ' sleeping...');
    }
}

function Dog(name) {
    this.name = name;   //создали свойство, значение которого принимается
                        //при создании объекта dog используя кнструктор Dog
                        //let dog = new Dog('petia');
    this.wow = function() { //в конструкторе короткая форма записи не работает wow() {}
        console.log(this.name + ' wow wow...'); //если в конструкторе не будет объявлен свойтсво name то,
                                                //name наследуется из прототипа animal
    }
}
Dog.prototype = animal; //конструктор Dog (класс), а следовательно создаваемый с
                        //помощью него объект наследует прототип объекта animal

let dog = new Dog('petia');

//правильно создавать прототип чеоез конструктор function Dog() {...}

dog.eat();
dog.sleep()
dog.wow();

console.log(Dog.hasOwnProperty('eat')); //проверка в конструкторе Dog является ли он
                                           //родителем метода eat
console.log(animal.hasOwnProperty('name')); //проверка в объекта animal является ли он
                                               //родителем свойства eat
