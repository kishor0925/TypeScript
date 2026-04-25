function getFEle<Type>(list : Type[]) : void{
   for(let i = 0; i < list.length; i++){
        console.log(list[i] + " ");
   } 
}

const num = [1,2,3];
const firstNum = getFEle(num);

const strings = ['sdf', 'sdf'];
const firstString = getFEle(strings)