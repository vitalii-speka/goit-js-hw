/* Поиск наибольшего значения среди свойств объекта

Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников 
и возвращает имя самого продуктивного (который выполнил больше всех задач). 
Сотрудники и кол-во выполненных задач содержатся как свойства объекта в формате "имя":"кол-во задач".
*/ 
console.log(`***************************************`);
const findBestEmployee = function (employees) {
  'use strict';

  // const keys = Object.keys(employees);
  // let result = '';
  // let maxValue = 0;
  
  // for (const key of keys) {
  //     if (employees[key] > maxValue) {
  //         maxValue = employees[key];
  //         result = key;
  //     }
  //     return result;
  // }


  const arrWorkers = Object.entries(employees);
  // console.log(arrWorkers);
  // console.log(arrWorkers.length);
  const taskWorker = Object.values(employees);
  // console.log(taskWorker);
  const niceWorker = Math.max(...taskWorker);
  // console.log(niceWorker);
  let result = '';
  for (let i = 0; i < arrWorkers.length; i += 1) {
    if (taskWorker[i] == niceWorker) {
      // console.log(taskWorker[i]);
      // console.log(Object.keys(employees)[i]);
      result += Object.keys(employees)[i];

      return result;
    }
  }
  return result;
};
  
// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
}; 
console.log(findBestEmployee(developers)); 
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
}; 
// console.log(findBestEmployee(supports)); 
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
}
// console.log(findBestEmployee(sellers)); 
// 'lux'  
