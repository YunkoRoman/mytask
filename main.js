/*2 створити масив з 10 елементів, заповнити його цілими рандомними значеннями(Math.random)*/
// let result = [];
// let l = 10;
// for (let i = 0; i <l ; i++) {
//     result.push(Math.round(Math.random()*l)+1)
// }
// console.log(result);

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
/* - відсортувати його за  віком (зростання , а потім окремо спадання)*/

// let sort = users.sort(
//     function (a,b) {
//       let s =  b.age - a.age;
//
//     return s;
//     });
// let rev = sort.reverse();
// console.log(rev);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// console.time('xxx')
// let sortname = users.sort(
//     function (a,b) {
//        const  aname = a.name.length; const bname = b.name.length;
//         if (aname > bname){
//             return 1;
//         } else {
//             return -1;
//         }
//     }
// )
// console.log(sortname.reverse());
// console.timeEnd('xxx')


// - виконати певні фільтрації(по вікові, імені...)

// let filtr = users.filter(function (user) {
// //     if (user.status === false) {
// //         return user;
// //     }
// // })
// // console.log(filtr);

// - зробити всіх старшими на рік

// let add = sortname.filter(function (user) {
//     if (user.age ++) {
//         return user;
//     }
// })
// console.log(add.reverse());

// - знайти перший/останній індекс об'єкта в якого ім'я макс

// let name = users.map(function (b) {
//     return b.name;
// }).lastIndexOf('max');
// console.log(name);

// - удалити всіх в проміжку інексів від 3 до 6
// let delet = users.slice(3,6);
// console.log(delet);

// - замінити 5 елемент на інший
let newuser = {name: 'Aligator', age: 62, status: false};
let newarr = users.splice(5,5)
console.log(newarr);

