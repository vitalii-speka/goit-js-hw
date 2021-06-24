const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

let idCounter = 0;
let transaction = {};
const account = {
  balance: 0,

  transactions: [],

  createTransaction(amount, type) {
    transaction = {
      idCounter: idCounter,
      type: type,
      amount: amount,
    };
    idCounter += 1;
  },

  deposit(amount) {
    this.createTransaction(amount, 'deposit');
    this.balance += amount;
    this.transactions.push(transaction);
    // alert('Successful!');
  },

  withdraw(amount) {
    this.createTransaction(amount, 'withdraw');
    if (this.balance >= amount) {
      this.balance -= amount;
      this.transactions.push(transaction);
      // alert('Successful!');
    } else {
      alert('Not enough money to withdraw');
    }
  },

  getBalance() {
    let currentBallance = this.balance;
    alert(`Your current balance: ${currentBallance}`);
  },

  getTransactionDetails(id) {
    let transactionId = `Transaction id: ${id}:\n`;
    let message = 'not found!';
    for (const item of this.transactions) {
      for (const key in item) {
        if (item[key] === id) {
          let { type, amount } = item;
          message = `${type}: ${amount}`;
          break;
        }
      }
    }
    alert(transactionId + message);
  },

  getTransactionTotal(type) {
    let total = 0;
    for (const item of this.transactions) {
      for (const key in item) {
        if (item[key] === type) {
          let { amount } = item;
          total += amount;
        }
      }
    }
    // alert(`Total amount of ${type}-transactions: ${total}`);
  },
};
console.log(account);
account.deposit(1000);
account.withdraw(233);
account.deposit(1500);
account.withdraw(355);
account.getBalance();
account.getTransactionDetails(2);
account.getTransactionTotal('withdraw');
console.log(account.transactions);
