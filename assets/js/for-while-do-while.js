// Кожне завдання вирішити циклами while, do..while, for.

// 1. Вивести числа від 25 до 0 (порядок зменшення).

for(let i = 25; i>=0; i--){
    console.log(i)
}
// або

// let count = 25
// while(count>=0){
//     console.log(count--)
// } 
// або

// let count = 25
// do {
//     console.log(count--)
// } 
// while(count>=0)


// 2. Вивести числа від 10 до 50, які кратні 5.

let count = 10
while(count<=50){
    console.log(count)
    count+=5
}
// або

// do{
//     console.log(count)
//     count+=5
// }
// while(count<=50)

// або

// for(let i = 10; i<=50; i+=5){
//         console.log(i)
// }


// 3. Знайти суму чисел в межах від 1 до 100.

let sum = 0;
let num = 1;
while (num<=100){
    sum+=num
    num++
}
// або

// do{
//     sum+=num
//     num++
// } while(num<=100)

// або

// for(let i = 1; i<=100; i++){
//     sum+=i;
// }

console.log(sum)