"use strict";
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
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[3]);
function add(a, b) {
    return a + b;
}
function greet(name) {
    console.log(`Helllo ${name}`);
}
console.log(add(89, 1));
greet('Kishor');
let user = {
    name: "Kishor",
    age: 22
};
console.log(user);
const user1 = {
    name: 'Kishor M',
    age: 21,
    city: 'Cbe',
    maritalStatus: 'No'
};
console.log(user1);
let userId = 123;
let arr = [1, 2, 3];
let addNum = (x, y) => x + y;
var Dir;
(function (Dir) {
    Dir[Dir["Up"] = 0] = "Up";
    Dir[Dir["Down"] = 1] = "Down";
    Dir[Dir["Left"] = 2] = "Left";
    Dir[Dir["Right"] = 3] = "Right";
})(Dir || (Dir = {}));
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
let move = Dir.Up;
console.log(Dir);
console.log(StatusCodes.BadRequest);
