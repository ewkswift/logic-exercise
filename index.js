// надо посчитать сколько элементов разных типов данных есть 
// после этого надо найти тип данных с самым большим кол-вом элементов

let string = 0
let number = 0
let boolean = 0
let object = 0
let others = 0

let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]

let tips = arr.filter(tip =>{ 
    if( typeof tip === 'string' ) {
        string++
    } 
    else if( typeof tip === 'number' ) {
        number++
    } 
    else if( typeof tip === 'boolean' ) {
        boolean++
    } 
    else if( typeof tip === 'object' ) {
        object++
    } 
    else{
        others++
    } 
})
console.log({string,number,boolean,object,others});
console.log(Math.max(string,number,boolean,object,others));


// внутри этого массива должны находится только правдивые элементы

let newArray = []
arr.filter(i => {
    if (i) {
        newArray.push(i)
    }
})
    
console.log(newArray);