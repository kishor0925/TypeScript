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

const user1 : userType = {
    name : 'Kishor M',
    age : 21,
    city : 'Cbe',
    maritalStatus : 'No'
}

console.log(user1);



//Type Aliases

type ID = string | number;
let userId : ID = 123;

type Numbers = number[];
let arr : Numbers = [1,2,3];
type Add = (a : number, b : number) => number;
let addNum : Add = (x,y) => x + y;

enum Dir {
    Up,
    Down,
    Left,
    Right
}

enum StatusCodes {  
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}

let move : Dir = Dir.Up;
console.log(Dir);
console.log(StatusCodes.BadRequest);


