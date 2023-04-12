// function createPerson(name, surname) {
//    return {
//       name: name,
//       surname: surname,
//       getFullName: function () {
//          if (this.fatherName) {
//             return this.name + ' ' + this.fatherName + ' ' + this.surname;
//          } else {
//             return this.name + ' ' + this.surname;
//          }
//       }
//    };
// }
// const a = createPerson("Вася", "Пупкін");
// const b = createPerson("Ганна", "Іванова");
// const c = createPerson("Єлизавета", "Петрова");

// console.log(a.getFullName()); // Вася Пупкін
// a.fatherName = 'Іванович';
// console.log(a.getFullName()); // Вася Іванович Пупкін

// console.log(b.getFullName()); // Ганна Іванова


// function createPersonClosure(name, surname) {
//    let fatherName;
//    let age;
//    function getName() {
//       return name;
//    }
//    function setName(newName) {
//       if (/^[A-Z][a-z]*$/.test(newName)) {
//          name = newName;
//       }
//       return name;
//    }
//    function getSurname() {
//       return surname;
//    }
//    function setSurname(newSurname) {
//       if (/^[A-Z][a-z]*$/.test(newSurname)) {
//          surname = newSurname;
//       }
//       return surname;
//    }
//    function getFatherName() {
//       return fatherName;
//    }
//    function setFatherName(newFatherName) {
//       if (/^[A-Z][a-z]*$/.test(newFatherName)) {
//          fatherName = newFatherName;
//       }
//       return fatherName;
//    }
//    function getAge() {
//       return age;
//    }
//    function setAge(newAge) {
//       if (/^\d+$/.test(newAge) && newAge >= 0 && newAge <= 100) {
//          age = parseInt(newAge);
//       }
//       return age;
//    }
//    function getFullName() {
//       let fullName = surname + ' ' + name;
//       if (fatherName) {
//          fullName += ' ' + fatherName;
//       }
//       return fullName;
//    }
//    function setFullName(newFullName) {
//       const parts = newFullName.split(' ');
//       if (parts.length === 2) {
//          setSurname(parts[0]);
//          setName(parts[1]);
//          setFatherName(undefined);
//       } else if (parts.length === 3) {
//          setSurname(parts[0]);
//          setName(parts[1]);
//          setFatherName(parts[2]);
//       }
//       return getFullName();
//    }
//    return {
//       getName,
//       setName,
//       getSurname,
//       setSurname,
//       getFatherName,
//       setFatherName,
//       getAge,
//       setAge,
//       getFullName,
//       setFullName,
//    };
// }
// const a = createPersonClosure("Вася", "Пупкін");
// const b = createPersonClosure("Ганна", "Іванова");
// console.log(a.getName()); // "Вася"
// a.setAge(15);
// console.log(a.getAge()); // 15
// a.setAge(150);
// console.log(a.getAge()); // 15
// console.log(b.getFullName()); // "Ганна Іванова"
// b.setFullName("Петрова Ганна Миколаївна");
// console.log(b.getFatherName()); // "Миколаївна"


// function createPersonClosureDestruct({ name = '', surname = '', fatherName = '', age = 0 } = {}) {
//    let innerName = name;
//    let innerSurname = surname;
//    let innerFatherName = fatherName;
//    let innerAge = age;
//    function getName() {
//       return innerName;
//    }
//    function setName(newName) {
//       if (typeof newName === 'string' && newName.length > 0 && /^[A-Z]/.test(newName)) {
//          innerName = newName;
//       }
//       return innerName;
//    }
//    function getSurname() {
//       return innerSurname;
//    }
//    function setSurname(newSurname) {
//       if (typeof newSurname === 'string' && newSurname.length > 0 && /^[A-Z]/.test(newSurname)) {
//          innerSurname = newSurname;
//       }
//       return innerSurname;
//    }
//    function getFatherName() {
//       return innerFatherName;
//    }
//    function setFatherName(newFatherName) {
//       if (typeof newFatherName === 'string' && newFatherName.length > 0 && /^[A-Z]/.test(newFatherName)) {
//          innerFatherName = newFatherName;
//       }
//       return innerFatherName;
//    }
//    function getAge() {
//       return innerAge;
//    }
//    function setAge(newAge) {
//       if (typeof newAge === 'number' && newAge >= 0 && newAge <= 100) {
//          innerAge = newAge;
//       }
//       return innerAge;
//    }
//    function getFullName() {
//       return `${innerSurname} ${innerName} ${innerFatherName}`;
//    }
//    function setFullName(fullName) {
//       const parts = fullName.trim().split(' ');
//       if (parts.length === 3 && /^[A-Z]/.test(parts[0]) && /^[A-Z]/.test(parts[1]) && /^[A-Z]/.test(parts[2])) {
//          innerSurname = parts[0];
//          innerName = parts[1];
//          innerFatherName = parts[2];
//       }
//       return getFullName();
//    }
//    return {
//       getName,
//       setName,
//       getSurname,
//       setSurname,
//       getFatherName,
//       setFatherName,
//       getAge,
//       setAge,
//       getFullName,
//       setFullName,
//    };
// }
// console.log(a.getName()); // "Вася"
// a.setAge(15);
// console.log(a.getAge()); // 15


// function isSorted(...args) {
//    for (let i = 1; i < args.length; i++) {
//       if (typeof args[i] !== "number" || args[i] <= args[i - 1]) {
//          return false;
//       }
//    }
//    return true;
// }
// console.log(isSorted(1, 2, 3, 4, 5)); // true
// console.log(isSorted(1, 2, 3, 5, 4)); // false
// console.log(isSorted(1, 2, "3", 4, 5)); // false
// console.log(isSorted()); // true


// const arr1 = new Array(5).fill().map((_, i) => i + 1)
// console.log(isSorted(...arr1)) // true
// const arr2 = new Array(5).fill().map((_, i) => 5 - i)
// console.log(isSorted(...arr2)) // false
// const arr3 = [1, 2, 3, '4', 5]
// console.log(isSorted(...arr3)) // false
// const arr4 = []
// console.log(isSorted(...arr4)) // true
// const arr5 = [1, 1, 2, 3, 5]
// console.log(isSorted(...arr5)) // true


function personForm(parent, person) {
   // Створюємо input елементи та додаємо їх у батьківський елемент
   const nameInput = document.createElement("input");
   nameInput.value = person.getName();
   parent.appendChild(nameInput);
   const surnameInput = document.createElement("input");
   surnameInput.value = person.getSurname();
   parent.appendChild(surnameInput);
   const patronymicInput = document.createElement("input");
   patronymicInput.value = person.getPatronymic();
   parent.appendChild(patronymicInput);
   const ageInput = document.createElement("input");
   ageInput.value = person.getAge();
   parent.appendChild(ageInput);
   const fullNameInput = document.createElement("input");
   fullNameInput.value = person.getFullName();
   parent.appendChild(fullNameInput);
   // Додаємо обробники подій oninput для кожного input елементу
   nameInput.oninput = () => {
      person.setName(nameInput.value);
      nameInput.value = person.getName();
      fullNameInput.value = person.getFullName();
   };
   surnameInput.oninput = () => {
      person.setSurname(surnameInput.value);
      surnameInput.value = person.getSurname();
      fullNameInput.value = person.getFullName();
   };
   patronymicInput.oninput = () => {
      person.setPatronymic(patronymicInput.value);
      patronymicInput.value = person.getPatronymic();
      fullNameInput.value = person.getFullName();
   };
   ageInput.oninput = () => {
      person.setAge(ageInput.value);
      ageInput.value = person.getAge();
   };
   fullNameInput.oninput = () => {
      const fullName = fullNameInput.value;
      const [surname, name, patronymic] = fullName.split(" ");
      person.setSurname(surname || "");
      person.setName(name || "");
      person.setPatronymic(patronymic || "");
      surnameInput.value = person.getSurname();
      nameInput.value = person.getName();
      patronymicInput.value = person.getPatronymic();
      fullNameInput.value = person.getFullName();
   };
}

