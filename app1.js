// high order function1
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
//    map((student) => {
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

// // for, forEach, filter, map

// function getNamesByGrade(students, grade) {
//   const filterResult = students.filter((item) => {
//     if (item.percent > 85) {
//       return item;
//     }
//   });
// }

// getNamesByGrade(students, 5);



// high order function3
// let newObj = { ...obj };
// newObj.age = 30;

// let numbers = [1, 2, 3, 4, 5];

// let newNumbers = [...numbers];

// newNumbers.push(10);




//N ta elementdan iborat massiv berilgan.
//Massiv elementlari orasidan juftlarini va toqlarini o'z ichiga oladigan massivlar hosil qilinsin. (filter)

// function jufttoq(array){
//     const juft = array.filter(x => x % 2 === 0);
//     const toq = array.filter(x => x % 2 !== 0);
//     return [juft, toq];
// }
// const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// const [juft, toq] = jufttoq(array)
// console.log("juftlar", juft);
// console.log("toqlar", toq)





//15. Id si 4 bo'lgan productni o'chiruvchi dastur yozing. (filter)
// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];


// let filteredProducts = products.filter(product => product.id !== 4);

// console.log(filteredProducts);



//Massiv truthy va falsy elementlardan tuzilgan. O’sha massivdagi truthy va falsy elementlarni alohida massivlarga ajratib object qilib qaytaruvchi getTruthyFalsy funksiya tuzing. (filter)
// function getTruthyFalsy(array) {
//     const truthyElements = array.filter(element => element);
//     const falsyElements = array.filter(element => !element);

//     return {
//         truthy: truthyElements,
//         falsy: falsyElements
//     };
// }

// const inputArray = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];
// const result = getTruthyFalsy(inputArray);
// console.log(result);



// Satr berilgan. Satrdagi so'zlar uzunligidan iborat bo'lgan massiv qaytaring.(split, map)Input: "Men Abdulaziz Programmerman"Outpu: [3, 9, 13]
