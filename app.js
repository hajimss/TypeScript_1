// unknown is not the same as any
var userInput;
var userName;
userInput = 5;
userInput = 'str';
// add check before assigning the string
// unknown type is stricter than any
if (typeof userInput === 'string') {
    userName = userInput;
}
// function never returns any value, not even undefined
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError('An Error Occured: ', 500);
console.log(result);
