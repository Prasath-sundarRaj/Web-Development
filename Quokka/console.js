console.log(typeof typeof NAN)
const anime =[
    {
        name:'naruto',
        release:10,
        genre:'action'
    },
    {
        name:'spyfamily',
        release:10,
        genre:'comedy'
    }
]
// console.log("first",anime)
const mems = anime.map((item)=>{
    console.log("terms",        {item}
    )
    
})
let number = 0;
console.log(number++)//post increment it returns the value before incrementing but it becomes 1
console.log(++number)//pre increment it returns the value after incrementing so it becomes 2
console.log(number)
console.log(3>2>1 === false)
console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());
// console.log(018 - 015)//decimal to octal conversion
const names = [
    'porter','alice','richard','niel'
];
names.sort((a,b)=>{
return a.localeCompare(b);
})
console.log(names)

const numbers = 1.23333333444
console.log(numbers.toFixed(4))//used to round the decimal values
for(var i=0;i<4;i++){
    setTimeout(function(){
        console.log(i);
    }, i*1000);
}//prints 4 since var is hoisted at the top
for (let i=0;i<3;i++){
    setTimeout(() => {
        console.log(i)
    }, i*1000);
}
// how to check if a string contains substring in javascript
let stringchk = "wordsapple";
const checks = stringchk.includes("pple")
const check = stringchk.indexOf("o")
console.log(check)
//to breakdown case sensitivity we use toLowerCase() method
let ammont = "Ammonium"
let subtr = "amm"
console.log(ammont.toLowerCase().includes(subtr.toLowerCase()))
console.log(ammont.toLowerCase().indexOf(subtr.toLowerCase()))
var bar = null//since null in one kind of object
console.log(typeof bar == 'object')