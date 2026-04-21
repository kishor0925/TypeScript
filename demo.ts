/*
let input : string | null = prompt();

if(input !== null){

    let age : number = Number(input);

    if(age >= 18){
        console.log('eligible for vote');
    }
    else{
        console.log('not eligible for vote');
    }
}
else{
    console.log("No input provided")
}
*/

let numbers : number[] = [1,2,3,4,5];
console.log(numbers[3]); 

function add(a : number, b : number) : number{
    return a + b;
}


function greet(name : string) : void{

    console.log(`Helllo ${name}`)
}

console.log(add(89, 1));
greet('Kishor');

let user: { name: string; age: number } = {
    name: "Kishor",
    age: 22
};

console.log(user);

interface userType {
    name: string;
    age: number;
    city?: string;
    maritalStatus?: string;
}