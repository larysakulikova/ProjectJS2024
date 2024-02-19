//Випадок - 1
//let num = 50;

// while(num <= 55) {
//     console.log(num);
//     num++
// }


//Випадок - 2
// do {
//     console.log(num);
//     num++
// }
// while(num < 60);

// for(let i = 1; i < 8; i++)
// console.log(i);


//Випадок - Викидуємо вихідні 6 та 7
// for(let i = 1; i <= 28; i++) {
//     if (i === 6 || i === 7){
//         continue;
//     }
//     console.log(i);
// }

//Випадок - Цикл  в циклі
// for (let i = 1; i <= 3; i++){
//     console.log("Тренування номер" ${i});
//     for (let j = 1; i <= 3; j++){
//         console.log("j спрацювало" ${j} "разів");
//     }
// }


//ПЕревірити!!!
// let result = '';
// const length = 8;
// for(let i = 1; i < length; i++) {
//     for(let j = 0; j < i; j++){
//     result += '*';
// }
// result += '\n';
// }


//Cамостійна робота
//Завдання 1
// let num = 5;
// while(num <= 10) {
//     console.log(num);
//     num++
// }

//Завдання 2
// for(let i = 20; i > 10; i--) {
//     if (i === 13)
//         break;
//     console.log(i);
// }


//Завдання 3
// let num = 2;
// while(num <= 10) {
//     console.log(num);
//     num = num + 2
// }

//Завдання 4 (умова)
// for(let i = 2; i <= 16; i++) {
//     if (i%2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
//Рішення - завдання 4
let i = 2;
while (i <= 16) {
    if(i%2 === 0) {
        i++;
        continue;
    } else {
        console.log(i)
    }
    i++;
}
