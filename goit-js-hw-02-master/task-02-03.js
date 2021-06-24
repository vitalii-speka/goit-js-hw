/*
 * Поиск самого длинного слово в строке с пробелами
 Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

- Результатом вызова функции должна быть строка
- Результатом вызова функции должна быть пустая строка, если аргумент - пустая строка
Для строки 'The quick brown fox jumped over the lazy dog' самое длинное слово должно быть 'jumped'
Для строки 'Google do a roll' самое длинное слово должно быть 'Google'
Для строки 'May the force be with you' самое длинное слово должно быть 'force'
Ожидается использование метода 'split'

  var strSplit = str.split(' ');

  var longestWord = 0;

  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
	longestWord = strSplit[i].length;
     }
  }
  return longestWord;

 */

// const findLongestWord = function (string = ' ') {
//   let str = string.split(' ');
//   // console.log(eatingWords);
//   let longest = ' ';
//   let word = null;

//   for (let i = 0; i < str.length; i += 1) {
//     if (longest < str[i].length) {
//       longest = str[i].length;
//       word = str[i];
//     }
//   }
//   return word;
// };

function findLongestWord(string = '') {
  // Write code under this line
  let words = string.split(' ');
  let longestWord = words[0];

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'
