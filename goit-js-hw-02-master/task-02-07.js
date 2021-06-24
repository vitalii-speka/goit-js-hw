/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

function mapArray(array) {
  const numbers = [];
  for (let i = 0; i < array.length; i += 1) {
    // Write code under this line
    if (!Number.isFinite(array[i])) continue;
    numbers.push(array[i]);
  }
  return numbers;
}

console.log(mapArray([-2, 'ldf', 'ldf', 2]));
// [-20, 0, 20]

console.log(mapArray([-2.5, 0, 2.5]));
// [-25, 0, 25]
