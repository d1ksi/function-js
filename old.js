// function inviteToTeam() {
//    let choice = false;
//    while (!choice) {
//       const invite = confirm('webcam?)');
//       if (invite) {
//          choice = true;
//          alert('welcome to the team');
//       }
//    }
// }


// function fillArray() {
//    const arr = [];

//    while (true) {
//       const content = prompt('Fill in the content');

//       if (content === null) {
//          break;
//       } else if (content !== '') {
//          arr.push(content);
//       }
//    }

//    console.log(arr);
// }


// function checkAge() {
//    const age = +prompt('Скільки вам років?', '');

//    if (age < 0) {
//       alert('чи кіборг, чи KERNESS');
//    } else if (age < 18) {
//       alert('школяр');
//    } else if (age > 18 && age < 30) {
//       alert('молодь');
//    } else if (age > 30 && age < 45) {
//       alert('зрілість');
//    } else if (age > 45 && age < 60) {
//       alert('захід сонця');
//    } else if (age > 60) {
//       alert('як пенсія?');
//    }
// }


// function getSize() {
//    const size = prompt('Ваш размер в формате s-xxl');

//    switch (size) {
//       case 's':
//          console.log('Италия 38');
//          break;
//       case 'm':
//          console.log('Италия 40');
//          break;
//       case 'l':
//          console.log('Италия 42-46');
//          break;
//       case 'xl':
//          console.log('Италия 46-50');
//          break;
//       case 'xxl':
//          console.log('Италия 50-52');
//          break;
//       default:
//          console.log('Ты шо голый(а)');
//    }
// }


// function chooseDrink() {
//    const noSwitch = (key, cases, defaultKey = 'default') => {
//       if (key in cases) {
//          // если ключ найден, запускаем функцию из объекта
//          return cases[key]();
//       } else {
//          // если ключ не найден, запускаем функцию по умолчанию
//          return cases[defaultKey]();
//       }
//    };

//    const drink = prompt('Что вы любите пить?');

//    noSwitch(drink, {
//       воду: () => console.log('Найздоровіший вибір!'),
//       чай() {
//          console.log('Смачна та корисна штука. Не перестарайтеся з цукром');
//       },
//       пиво: () => console.log('Добре влітку, та в міру'),
//       віскі: function () {
//          console.log('Та ви, батечку, естет! Не забудьте лід і сигару');
//       },
//       default() {
//          console.log('Шото я не зрозумів');
//       }
//    });
// }