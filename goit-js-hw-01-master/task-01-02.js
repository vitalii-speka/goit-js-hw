const invoice = 100;
const stock = 100;

let message;

if (invoice === 100) {
  message = 'Заказ оформлен, с вами свяжется менеджер';
} else if (invoice === 50) {
  message = 'Заказ оформлен, с вами свяжется менеджер';
} else if (invoice === 150) {
  message = 'На складе недостаточно товаров!';
} else {
  console.log('Invalid subscription type');
}

console.log(message);

//если invoice равен 100
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 50
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 150
// то значение message будет равно
// 'На складе недостаточно товаров!'
