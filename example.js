function  Animal(name) { //описали Animal в виде класса
    this.name = name;
}
//все методы описуются в отдном прототипе, но в разных блоках, смотри ниже
Animal.prototype.eat =  function () { //методы для Animal описываем как прототипы
    console.log(this.name + ' eating...') //this.name - это текущее имя, а name - это что пришло то и будет выводится
}
Animal.prototype.sleep = function () {
    console.log(this.name + ' sleeping...')
}

function Dog(name) {
    Animal.call(this, name); //чтобы в Animal попал аргумент Dog-a name
    //когда делается call, Animal рассматривается как обычная function
}
//Dog.prototype = new Animal(); //добавляем все свойства и методы из Animal
Dog.prototype = Object.assign({}, Animal.prototype); //добавляем только методы из Animal

Dog.prototype.wow = function () { //создаем новый метод wow в Dog
    console.log(this.name + ' wow wow...');
}
let dog = new Dog('Sharik');
dog.eat();
dog.wow();


//-----------------методы функций----------------
//bind - вызывается функция и в ней в качестве this будет то что вней указано
//call - в качестве this передает указаный параметр (записывается первым), а дальше аргументы через запятую
//apply - в качестве this передает указаный параметр (записывается первым), а дальше аргументы в виде массива

//---------------method apply--------------------
function  xApply(a, b) {
    console.log(this + (a+b)); //this может быть только один
}
xApply.apply('this is method Apply, and argument = ', [1, 2]);
//---------------method call---------------------
function xCall(a, b) {
    console.log(this + (a+b));
}
xCall.call('this is method Call, and argument = ', 10, 20);
//----------- ---method bind---------------------
function x(a, b) {
    console.log(this + (a+b));
}
function y() {
    return 'forBind ';
}
x = x.bind(y());
x(100, 200);

//добавляем свои свойства к стандартным свойствам объктов в javascript
Array.prototype.addOne = function () {
    this.map(e => console.log(e+1));
};
[1,2,3].addOne();

// Element.prototype.rotate = function (angle) {
//     this.style.tranform = 'rotate('+angle+'deg)';
// };
