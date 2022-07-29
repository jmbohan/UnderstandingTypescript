type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';
type User = { name: string, age: number };
const u1: User = { name: 'Max', age: 30 };

function combineThings(
    n1: Combinable,
    n2: Combinable,
    resultConversion: ConversionDescriptor) 
    {
    let result;
    if (typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-number') {
        result = +n1 + +n2;
    } else {
        result = n1.toString() + n2.toString();
    }
    return result;
}

function greet(user: User) {
    console.log(`Hello, ${user.name}, you are ${user.age} years old!`);
}

function isOlder(user: User, checkAge: number) {
    return checkAge > user.age;
}

