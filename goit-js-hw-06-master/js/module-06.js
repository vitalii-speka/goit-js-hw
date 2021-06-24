// console.log('разделяем задания 1***************************');
// const numbers = [1, 2, 3, 5];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }

// // Функциональный forEach
// numbers.forEach(num => console.log(num));

// // Указываем параметр idx если нужен доступ к счетчику
// numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));
// console.log('разделяем задания 1***************************');
// animals.forEach(animal => {
//   animal.friends.forEach(friend => {
//     console.log(friend);
//   });
// });
// console.log('разделяем module 06 ***************************');
// const users2 = [
//   {
//     id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//     name: 'Moore Hensley111',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
// ];

// // const getUserNames = users => users.map(user => user.name);
// // или
// // let doubles = users.map(function(user) {
// //   return user.name

// //const getUserNames = array => array;

// const getUserNames = ({ name }) => users2.map(({ name }) => name);

// console.log(getUserNames(users2));

// // const getUserNames = users2.map(({ name }) => name);

// // console.log(getUserNames);

// const object = [{ num: 2 }, { num: 12 }];
// //function getNum (obj) { return obj.num; }
// function getNum([{ num }, { num: num2 }]) {
//   return `${num} + ${num2}`;
// }
// console.log(getNum(object)); // 2

// console.log('разделяем module 06 ***************************');
// // console.log('разделяем задания 1***************************');

// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
//   { name: 'Chelsey', isActive: false },
// ];

// // Для каждого элемента коллекции (user) проверим поле isActive.
// // Если оно true, то текущий элемент (user) будет записан в результирующий массив.
// const activeUsers = users.filter(user => user.isActive);
// console.log(activeUsers);

// // Для каждого элемента коллекции (user) проверим поле isActive.
// // Если оно false, то текущий элемент (user) будет записан в результирующий массив.
// const inactiveUsers = users.filter(user => !user.isActive);
// console.log(inactiveUsers);

console.log('разделяем module 06! ***************************');
const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const getTags = tweets =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

const tags = getTags(tweets);
console.log(tags);

// Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// Это стандартная практика если callback-функция довольно большая.

// Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// то создаем его и записывает ему значение 0.
// В противном случае увеличиваем значение на 1.
const getTagStats = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }
  acc[tag] += 1;
  return acc;
};
// Начальное значение аккумулятора это пустой объект {}
const countTags = tags => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log(tagCount);

console.log('разделяем module 06 ***************************');

console.log(_.sort);

// console.log('разделяем задания 1***************************');
// console.log('разделяем задания 1***************************');
// console.log('разделяем задания 1***************************');
// console.log('разделяем задания 1***************************');
// console.log('разделяем задания 1***************************');
