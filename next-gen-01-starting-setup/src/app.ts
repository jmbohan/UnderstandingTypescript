// const userName = 'Jason';

// let age = 30;

// age = 29;

// function add(a: number, b: number): number {
//     let result;
//     result = a + b;
//     return result;
// }

// if (age > 20) {
//     let isOld = true;
// }

// console.log(isOld);

//works because there is only one statement a + b

//const add = (a: number, b: number = 1 ): number => a + b;

const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event => console.log(event));
}

//printOutput(add(5));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person = { firstName: 'Jason', age: 42 };

const copiedPerson = { ...person };

// console.log(copiedPerson);

// console.log(add(2,5));

//-----------------------------------------//
// Rest Parameters:                        //
//-----------------------------------------//

const add =(...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

const addNunbers = add(5, 10, 2, 3.7);
console.log(add(addNunbers));

//-----------------------------------------//
// Array Destructuring:                    //
//-----------------------------------------//

const [hobby1, hobby2, ...additionalHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const {firstName, age} = person;