let managerBg = 'Vitalii Speka';

const hotel = {
    name: 'Resort Hotel',
    managerBg,
    stars: 5,
    capacity: 100,
    greetInES6() {
        console.log('Welcome');
    },
    showName() {
        console.log(this.name);
    },
    changeCapacity(value) {
        this.capacity = value;
    },
};
  
//   console.log(hotel.name); // Resort Hotel
//   console.log(hotel['name']); // Resort Hotel
  
//   hotel.name = 'Coastline Resort';
//   console.log(hotel.name); // Coastline Resort
//   console.log(hotel['name']); // Coastline Resort
  
//   hotel['name'] = 'Stardust Hotel';
//   console.log(hotel.name); // Stardust Hotel
//   console.log(hotel['name']); // Stardust Hotel

hotel.manager = 'vitalii speka';
hotel.addres = '64, Kalinina st.';

delete hotel.manager;

hotel.greetInES6();

hotel.showName();

hotel.changeCapacity(200);
console.log(hotel.capacity);

for (const key in hotel) {
    console.log('Key: ', key, ';\n', 'Value(условие): ', hotel[key]);
}


console.log(hotel); 

console.log('разделяем задания 2***************************');

const motel = {
    stars: 5,
    capacity: 150,
};

motel.name = 'lev hotel';

const keys = Object.keys(motel);
console.log(keys.length);
const values = Object.values(motel);
console.log(values);
const entries = Object.entries(motel);
console.log(entries);

for (const entry of entries) {
    const key = entry[0];
    const value = entry[1];

    console.log(`${key}: ${value}`);
}

console.log(motel);


console.log('разделяем задания 3***************************');

const key = 'person';
const getKey = function() {
    return 'age';
};

const object = {
    [key]: 'Mango',
    [getKey()]: 2,
};

console.log(object);

console.log('разделяем задания 4***************************');

const temperatures = [18, 14, 12, 21, 17, 29];

const min = Math.min(...temperatures);

console.log(min);

console.log('разделяем задания 5***************************');
const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
const housesInDebt = [...houses.slice(0, 4), ...houses.slice(5)];

console.log(housesInDebt); // ['Arryn','Frey','Greyjoy','Stark','Tyrell']

console.log('разделяем задания 6***************************');

const a = { x: 1, y: 2 };
const b = { x: 2, z: 3 };

const c = Object.assign({}, a, b);
console.log(c); // {x: 0, y: 2, z: 3}

// То же самое используя операцию spread
const d = { ...a, ...b };

console.log(d); // {x: 0, y: 2, z: 3}

console.log('разделяем задания 6***************************');
const lion = { hasTail: false, legs: 8 };
const eagle = {  hasTail: true, legs: 5, canFly: true };

const chimera = { ...lion, ...eagle };

console.log(chimera); // {hasTail: true, legs: 4, canFly: true}
console.log('разделяем задания 7***************************');
const add = function(value, ...args) {
    console.log(value); // первый аргумент
    console.log(args); // массив всех остальных аргументов
  };
  
  add(10, 1, 2, 3);
  add(15, 1, 2, 3, 4, 5);

console.log('разделяем задания 8***************************');

const hotel1 = {
    name: 'Resort Hotel',
    // stars: 5,
    capacity: 100,
  };
  
  const { name: hotelName, stars, status: hotelStatus = 'empty' } = hotel;

  console.log(hotelName, stars, hotelStatus);
  // "Resort Hotel", 5, "empty"
  console.log('разделяем задания 8-1***************************');
  const rgb = [200, 255, 100];

  const [red, green, blue] = rgb;
  
  console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);
  // Red: 200, Green: 255, Blue: 100
  console.log('разделяем задания 9***************************');


  console.log('разделяем задания 10***************************');


  console.log('разделяем задания 11***************************');
