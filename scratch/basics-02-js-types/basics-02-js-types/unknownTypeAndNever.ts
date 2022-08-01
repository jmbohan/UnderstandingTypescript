// unknown is used to an unknown value with any type but is better to use than any
let userInput: unknown;
let typeUserName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
  typeUserName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError('An error occurred!', 500);


