// let ism = "name";
// let a = "age";

// const obj = {
//   [ism]: "John",
//   [a]: 20,
// };

// console.log(obj);
// [name, age];

// for ... in \ for ... of;

// for (let a of obj) {
//   console.log(obj);
// }

// const me = {
//   firstName: "Abdulaziz",
//   lastName: "Toshpulatov",
//   age: 23,
//   languages: ["js", "python", "c++", "nodejs"],
//   friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
// };

// let result = `Assalomu alaykum,
// Qadirli mehtmon, Sizni Muhammadzoir va Marinxonni to'ylariga lutfan taklif etamiz.

// Hurmat bilan Muhammadzoir`;

// console.log(result);

// for (let item in me) {
//   result += `${item}: ${me[item]} \n`;
// }

// console.log(result);

// Abdulaziz Programmer nechta to'g'ri va noto'g'ri javob topganligini toping.

// const rightAnswers = { 1: "B", 2: "A", 3: "C", 4: "D", 5: "B", 6: "C", 7: "A", 8: 'D', 9: "A", 10: "B" };
// const myAnswers = {1: "C", 2: "A", 3: "D", 4: "D", 5: "B", 6: "C", 7: "B", 8: "C", 9: "A", 10: "C"};

// const rightAnswers = {
//   1: "B",
//   2: "A",
//   3: "C",
//   4: "D",
//   5: "B",
//   6: "C",
//   7: "A",
//   8: "D",
//   9: "A",
//   10: "B",
// };

// const myAnswers = {
//   1: "C",
//   2: "A",
//   3: "D",
//   4: "D",
//   5: "B",
//   6: "C",
//   7: "B",
//   8: "C",
//   9: "A",
//   10: "C",
// };
// let counterTrue = 0;
// let counterFalse = 0;

// for (let item in rightAnswers) {
//   myAnswers[item] == rightAnswers[item] ? counterTrue++ : counterFalse++;
// }
// console.log({
//   true: counterTrue,
//   false: counterFalse,
// });

// let a = 1;
// let b = a;
// b = 8;
// a = 2;

// console.log("a:", a);
// console.log("b:", b);

// let obj = {
//   name: "John",
//   age: 20,
// };

// ... bu - spread operatori deyiladi (spread)
// let newObj = { ...obj };
// newObj.age = 30;

// let numbers = [1, 2, 3, 4, 5];

// let newNumbers = [...numbers];

// newNumbers.push(10);

//   Bahosi 5, 4, 3 bo’lgan o’quvchilarni ismlaridan iborat massiv qaytaruvchi getNamesByGrade(students, grade) funksiya tuzing. (map, filter)

// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];

// // map
// let changeStudents = students
//   .map((student) => {
//     if (student.percent > 85) {
//       return { ...student, grade: 5 };
//     } else if (student.percent < 85 && student.percent > 70) {
//       return { ...student, grade: 4 };
//     } else {
//       return { ...student, grade: 3 };
//     }
//   })
//   .filter((student) => student.grade == 5)
//   .map((student) => student.name);

// for, forEach, filter, map

// function getNamesByGrade(students, grade) {
//   const filterResult = students.filter((item) => {
//     if (item.percent > 85) {
//       return item;
//     }
//   });
// }

// getNamesByGrade(students, 5);

// let numbers = [3, 10, 5, 88, 41, 90, 12, 7, 18, 54];

// 50 dan kichiklarni -> []

// for
// let newNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < 50) {
//     newNumbers.push(numbers[i]);
//   }
// }
// console.log(newNumbers);

//forEach
// numbers.forEach((num) => {
//   if (num < 50) {
//     newNumbers.push(num);
//   }
// });
// console.log(newNumbers);

// filter
// const newNumbers = numbers.filter(num => num < 50);
// console.log(newNumbers);




