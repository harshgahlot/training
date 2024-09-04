const readline=require('readline-sync');

const arr1=[];
while(true){
    const data=readline.question("enter any number: ");
    arr1.push(+data);

    const op=readline.question('enter y to continue: ');
    if(op=='y'||op=='Y'){
        continue;
    }
    else{
        break;
    }
}
let sum=0
for(let i of arr1){
    sum+=i;
}

console.log(sum/arr1.length);