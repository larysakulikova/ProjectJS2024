// let text = ";alskjdfkasjdfjaklsjd;fja;sljdf;ajsdjfl;asdjflaskjdfl;kasjblvj nclxjzg.jdf,f";
// const numbers = 123424343;
// alert("text");
// let text = "sldjfa;ldj;lafs" //"" - type of data = text
// window.alert("our first js lesson")

// let firstNum = 4.4;
// console.log(typeof(firstNum));
// console.log(typeof("Hello"));

// let und;
// console.log(typeof(und));

// let man = true;
// console.log(typeof(man));

// console.log(typeof(4/"0"));

// let storeName = "Good Shop";
// const storeDescription = {
//     budget: 10000,
//     employees: ["Первенко", "Вторенко", "Тритенко"],
//     products: {
//         pen: 30,
//         note: 15
//     },
//     isOpen: true
// };
// console.log(storeDescription.employees[1]);

// const employee = {};
// employee.name = "Anna";
// employee.age = 25,
// employee.isMarried = true,
// employee.mainDuty = ["developer", "designer", "translator"];
// employee.data = {
//         height: 175,
//         weight: 55,
//         isStudent: true
//     };
// console.log(employee);


// let numberOfFilms = prompt("Скільки фільмів ви вже подивились?", "");
// console.log(numberOfFilms);


// const personalMovieDB = {
// count: numberOfFilms,
// movies: {},
// actors: {},
// genres: [],
// privat: false
// }
// console.log(personalMovieDB)

// let a = prompt("Один з останніх фільмів:" , "");
// let b = prompt("На скільки оцінете його?" , "");
// let c = prompt("Один з останніх фільмів:" , "");
// let d = prompt("На скільки оцінете його?" , "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// // personalMovieDB.movies.hello = d;

// console.log(personalMovieDB);


// if (1) {
//     console.log ("Ok!");
// } else {
//     console.log ("Good bye!");
// }

// const num = 101;

// if (num <= 50) {
//     console.log("Error!");
// } else if (num > 100) {
//     console.log("Too much!");
// } else {
//     console.log("OK!");
// }

//тернальний оператор

// умова дія, якщо true : дія, якщо false

// (num === 50) ? console.log("Okay") : console.log("Error!");

// const num = 101;
// switch (num) {
//     case 49:
//         console.log("Error!");
//         break;
//     case 100:
//         console.log("Not enough!");
//         break;
//     case 101:
//         console.log("Great!");
//         break;
//     default:
//         console.log("Not at this time!");
//         break;
// }


// const burger = true;
// const cola = true;
// const salad = false;

// //&& - оператор і



// if (burger && cola && salad) {
//     console.log("Lets have a break!");
// } else {
//     console.log("continue...");
// }

// const burger = true;
// const cola = false;

// if (burger && cola) {
//     console.log("Lets have a break!");
// } else {
//     console.log((burger && cola));
// }

//опероператор або ||


const burger = true;
const cola = false;

if (burger || cola) {
console.log("lets have a break!");
} else {
console.log("Error");
}