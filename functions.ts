function add(n1:number, n2:number): number{
    return n1+n2;
}

// return type void
function printResult(num:number): void{
    console.log('Result: ' + num);
}

function addAndHandler(
    n1: number, 
    n2: number, 
    cb: (num:number)=> void){
        const result = n1+n2;
        cb(result)
    }

// combineValues take in two number args and outputs one number type
let combineValues: (a: number, b: number) => number;

combineValues = add;
console.log(combineValues(8,8))

addAndHandler(10, 20, (result)=>{
    console.log(result)
})