//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//    Вивести кожну змінну за допомогою: console.log , alert, document.write
/*
let a = 'hello';
console.log(a);
alert(a);
document.write(a);
let b = 'owu';
console.log(b);
alert(b);
document.write(b);
let c = 'com';
console.log(c);
alert(c);
document.write(c);
let d = 'ua';
console.log(d);
alert(d);
document.write(d);
let e = 1;
console.log(e);
alert(e);
document.write(e);
let f = 10;
console.log(f);
alert(f);
document.write(f);
let j = -999;
console.log(j);
alert(j);
document.write(j);
let i = 123;
console.log(i);
alert(i);
document.write(i);
let u = 3.14;
console.log(u);
alert(u);
document.write(u);
let s = 2.7;
console.log(s);
alert(s);
document.write(s);
let v = 16;
console.log(v);
alert(v);
document.write(v);
let h = true;
console.log(h);
alert(h);
document.write(h);
let o = false;
console.log(o);
alert(o);
document.write(o);
*/


//- Створити об'єкт book з наступними полями : назва, (тип string) кількість сторінок (числовий тип), жанр (string)
/*

let book = {
    name: 'harry potter',
    pages: 600,
    genre: 'fantasy'
}
*/

//- Створити об'єкт book з наступними полями : назва, (тип string) кількість сторінок (числовий тип), жанр (string) автори (тип - масив, кожен елемент масиву - це стрінга)
/*

let book = {
    name: 'harry potter',
    pages: 600,
    genre: 'fantasy',
    writter: ['J. K. Rowling']
}
*/


//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
/*
const firstName = 'Yurii';
const middleName = 'Petrovich';
const lastName = 'Tyrkus';
const person = `${lastName} ${firstName} ${middleName}`;
*/

//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
/*
let firstName = prompt('Enter your first name');
let lastName = prompt('Enter your last name');
let middleName = prompt('Enter your middle name');
console.log(`${lastName} ${firstName} ${middleName}`)
*/

//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
/*
let a = 100; let b = '100'; let c = true;
console.log(typeof (a));
console.log(typeof (b));
console.log(typeof (c));
*/

//- Створити масив об'єктів з назвою books з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
/*

let books = [
    {
        name: 'firstName',
        pages: 'somePages',
        genre: 'someGenre',
        writter: 'someWritter'
    },
    {
        name: 'secondName',
        pages: 'somePages',
        genre: 'someGenre',
        writter: 'someWritter'
    },
    {
    name: 'thirstName',
    pages: 'somePages',
    genre: 'someGenre',
    writter: 'someWritter'
    }
]
console.log(books[0],books[1],books[2]);
*/

