//Q-1
const readline=require('readline-sync');

const arr=["Mind","SpRInT","Pvt","Ltd"];
const newarr=[];
for(let i of arr){
    newarr.push(i.toUpperCase());
}
console.log(newarr);

//Q-2
while(true){
    const data=readline.question("enter any string: ");
    console.log(data.length);

    const op=readline.question('enter y to continue: ');
    if(op=='y'||op=='Y'){
        continue;
    }
    else{
        break;
    }
}

