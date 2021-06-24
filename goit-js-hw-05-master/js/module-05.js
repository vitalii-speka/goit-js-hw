console.log('module 5***************************');
// const Hotel = function (name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
// };

// const hotel = new Hotel('Resort Hotel', 5, 100);
// console.log(hotel);
// // Hotel {name: "Resort Hotel", stars: 5, capacity: 100}

// const motel = new Hotel('Sunlight Motel', 4, 300);
// console.log(motel);
// Hotel {name: "Sunlight Motel", stars: 4, capacity: 300}
// console.log('разделяем задания 2***************************');
// const animal = { eats: true };
// const dog = { barks: true };
// console.log(animal);
// console.log(dog);
// dog.__proto__ = animal;
// // animal.__proto__ = dog;

// // В dog можно найти оба свойства
// console.log(`dog.barks`, dog.barks); // true
// console.log(`dog.eats`, dog.eats); // true
// console.log(`animal.barks`, animal.barks); // undefined
// console.log(`animal.eats`, animal.eats); // true
// console.log('разделяем задания 3***************************');
// const animal = { eats: true, dddd: false };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) continue;

//   console.log(key); // barks
// }
// console.log('разделяем задания 4***************************');
// const Guest = function (name, room) {
//   this.name = name;
//   this.room = room;
// };

// Guest.prototype = {
//   constructor: Guest,
// };

// console.log(Guest.prototype); // {constructor: ƒ}
// // console.log('разделяем задания 1***************************');
// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// /*
//  * Теперь у нас есть конструктор базового класса героя,
//  * добавим в prototype какой-то метод.
//  */
const Hero = function (name, xp) {
  this.name = name;
  this.xp = xp;
};

/*
 * Теперь у нас есть конструктор базового класса героя,
 * добавим в prototype какой-то метод.
 */
Hero.prototype.gainXp = function (amount) {
  console.log(`${this.name} gained ${amount} experience points`);
  this.xp += amount;
};

const mango = new Hero('Mango', 1000);
console.log(mango); // Hero { name: 'Mango', xp: 1000 }

// Так как mango это экземпляр Hero, то ему доступны методы из Hero.prototype
mango.gainXp(500); // Mango gained 500 experience points
console.log(mango); // Hero { name: 'Mango', xp: 1500 }
// console.log('разделяем задания 1***************************');
// console.log('разделяем задания 10***************************');
console.log('module 5***************************');
