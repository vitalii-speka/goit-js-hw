console.log('разделяем задания 1***************************');

// const printMessage = function (message) {
//   console.log(message);
// };

// const higherOrderFunction = function (callback) {
//   const string = 'HOCs are awesome';
//   callback(string);
// };

// higherOrderFunction(printMessage);

// console.log('разделяем задания 2***************************');
// const repeatLog = function (n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// };

// repeatLog(4);
console.log('разделяем задания +***************************');
// const printValue = function (value) {
//   console.log(value);
// };

// const prettyPrint = function (value) {
//   console.log('Logging value: ', value);
// };

// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// // Передаем printValue как callback-функцию
// repeat(4, printValue);
// // 0
// // 1
// // 2

// // Передаем prettyPrint как callback-функцию
// repeat(4, prettyPrint);

console.log('разделяем задания !!!***************************');

// Если параметров нет, то обязательно должны быть пустые круглые скобки.
// const fn = a => {
//   if (a >= 6) {
//     console.log('Hello! :]');
//     return;
//   }
//   console.log('Hello! :]+++');
// };

// fn(6);
// console.log('разделяем задания 1***************************');
// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// const labels = [];

// repeat(3, value => {
//   labels.push(`Label ${value + 1}`);
// });

// console.log(labels); // ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"]
// console.log('разделяем задания 1***************************');
// const filter = function (array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//     const passed = test(element);

//     if (passed) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// };

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.log(freshFruits); // массив с объектами apples и bananas

// const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(fruitsWithQuantity); // массив с объектами apples и grapes
console.log('разделяем задания 1***************************');
const greet = function (guest, stars) {
  return `${guest}, welcome to ${stars}-star ${this.name}!`;
};

const hotel = { name: 'Resort Hotel' };
const motel = { name: 'Sunlight Motel' };

console.log(greet.call(hotel, 'Mango', 5));
console.log(greet.call(hotel, 'ddd', 5));
// "Mango, wellcome to 5-star Resort Hotel!"

console.log(greet.call(motel, 'Poly', 4));
// "Poly, wellcome to 4-star Sunlight Motel!"
// console.log('разделяем задания 1***************************');
// console.log('разделяем задания 1***************************');

// console.log('разделяем задания 10***************************');

// console.log('разделяем задания 11***************************');
