/* переиспользование методов класса

Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.

Добавь классу следующий функционал:

Геттер value - возвращает текущее значение поля _value
Метод append(str) - получает параметр str (строку) и добавляет ее в конец _value
Метод prepend(str) - получает параметр str (строку) и добавляет ее в начало value
Метод pad(str) - получает параметр str (строку) и добавляет ее в начало и в конец _value
Метод pad должен использовать методы append и prepend
*/
class StringBuilder {
  constructor(value) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  set value(addStr) {
    this._value = addStr;
  }

  append(string) {
    this._value = this._value + string;
  }
  prepend(string) {
    this._value = string + this._value;
  }

  pad(string) {
    // console.log(this.append(string));
    this.append(string);
    this.prepend(string);
  }
  // это метод работает, но условие задачи использовать два предыдущих метода
  //pad(string) {
  //   this._value = string + this._value + string;
  // }
}

console.log(typeof StringBuilder);
// 'function'
// console.log(builder.prepend(x));
const builder = new StringBuilder('.');

builder.append('^');
// console.log(builder.value); // '.^'

builder.prepend('^');
// console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
