/*Task1*/
let numOrStr = prompt('input number or string');
console.log(numOrStr)

if(numOrStr === null) {
     console.log('вы отменили')
} else {
    let combConditions;
    combConditions = ( numOrStr.trim() === '' ) ? 'Empty String' : ( isNaN( +numOrStr ) ) ? 'number is Ba_NaN' : 'OK!';
    console.log(combConditions);
}
/*Task2*/
// const numOrStr = prompt('input number or string');
// console.log(numOrStr)
//
// switch (true) {
//     case numOrStr === null:
//         console.log('вы отменили');
//         break;
//     case numOrStr.trim() === '':
//         console.log('Empty String');
//         break;
//     case isNaN( +numOrStr):
//         console.log(' number is Ba_NaN');
//         break;
//     default:
//         console.log('OK!');
//         break;
// }