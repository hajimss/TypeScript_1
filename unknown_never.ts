// unknown is not the same as any
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'str';

// add check before assigning the string
// unknown type is stricter than any
if (typeof userInput === 'string'){
    userName =  userInput;
}

// function never returns any value, not even undefined
function generateError(message: string, code: number): never{
    throw {message:message, errorCode:code};
}

const result = generateError('An Error Occured: ', 500);
console.log(result)