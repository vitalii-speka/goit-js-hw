/* класс

Напиши класс Car с указанными свойствами и методами.
*/

// class Car {
/*
 * Добавь `статический` метод
 * `getSpecs(car)`, который принимает
 * объект-машину как параметр
 * и возвращает шаблонную строку
 * со свойствами и значениями объекта.
 * Свойства:
 *   maxSpeed,
 *   speed,
 *   isOn,
 *   distance,
 *   price
 * Пример строки, полученной этим методом:
 * 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
 */
/*
 * Конструктор получает объект настроек.
 *
 * Добавь свойства будущеего экземпляра класса:
 *  speed - текущая скорость,
 *          начальное значение `0`
 *  price - цена автомобиля
 *  maxSpeed - максимальная скорость
 *  isOn - заведен ли автомобиль.
 *         Значения `true` или `false`,
 *         начальное значение false
 *  distance - пробег в километрах,
 *             начальное значение `0`
 */
/*
 * Добавь геттер и сеттер
 * для свойства `price`, который будет
 * работать с свойством цены автомобиля.
 *
 * ВАЖНО: для записи методов get и set
 * значение параметра записывают с
 * подчеркиванием. См. ниже пример 1.
 */
// }
/*
 * Метод, который заводит автомобиль
 * Записывает в свойство `isOn` значение `true`
 *
 */

class Car {
  static getSpecs({ maxSpeed, speed, isOn, distance, price }) {
    return `maxSpeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`;
  }

  constructor({ maxSpeed, speed = 0, isOn = false, distance = 0, price }) {
    this.maxSpeed = maxSpeed;
    this.speed = speed;
    this.isOn = isOn;
    this.distance = distance;
    this._price = price;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }
  turnOn() {
    this.isOn = true;
  }
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
  accelerate(value) {
    this.speed + value <= this.maxSpeed
      ? (this.speed += value)
      : (this.speed = this.maxSpeed);
  }
  decelerate(value) {
    this.speed - value >= 0 ? (this.speed -= value) : (this.speed = 0);
  }
  drive(hours) {
    if ((this.isOn = true)) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
