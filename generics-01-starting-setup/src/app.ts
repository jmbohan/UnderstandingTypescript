// const names: Array<string> = [];


// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done');
//     } , 2000);
// });

// promise.then(data => {
//     // data.split(' ');
// }) 

// function merge<T, U>(objA: T, objB: U){
//     return Object.assign(objA, objB);
// }

// const mergedObj = merge({name: 'Max', hobbies: ['Sports']}, {age: 30});
// const mergedObj2 = merge<{name: string, hobbies: string[]}, {age: number}> ({name: 'Max', hobbies: ['Sports', 'Band', 'Cooking']}, {age: 30});


// console.log(mergedObj.age);
// console.log(mergedObj2.hobbies[1]); //This works and I don't know why there is an error

//----------------------------------------//
//----------------------------------------//
//-----------constraints------------------//
//----------------------------------------//
//----------------------------------------//
//----------------------------------------//


function merge<T extends object, U extends object>(objA: T, objB: U){ // extends object is a constraint objA and objB must be of type object
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Max', hobbies: ['Sports']}, {age: 30});
const mergedObj2 = merge<{name: string, hobbies: string[]}, {age: number}> ({name: 'Max', hobbies: ['Sports', 'Band', 'Cooking']},{age: 30}); 


console.log(mergedObj.age);
console.log(mergedObj2.hobbies[1]); //This works and I don't know why there is an error




