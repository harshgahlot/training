function si(principal, rate, time) {
    let simpleInterest = (principal * rate * time) / 100;
    return simpleInterest;
}

let principal = 1000; 
let rate = 5; 
let time = 2; 

let interest = si(principal, rate, time);
console.log(`The simple interest is ${interest}`);

function circle(r){
    let area=3.14*r*r;
    let c=2*3.14*r;

    return (`${area}, ${c}`);
}
let r=5;
let ans=circle(r);
console.log(ans);


var arr=[];
for(i=1;i<=10;i++){
    const v=i*7;
    
    
    arr[i]=v
}
console.log(arr);

function fib(n){
    if( n==0){
        return 0;
    }
    if (n==1){
        return 1;
    }
    return fib(n-1)+fib(n-2);    
}
console.log("Fibonacci")
console.log(fib(10));