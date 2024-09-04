class Account {
    constructor(acc_holder_name, acc_no, balance) {
        this.acc_holder_name = acc_holder_name;
        this.acc_no = acc_no;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: ${amount}. New Balance: ${this.balance}`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: ${amount}. New Balance: ${this.balance}`);
        } else if (amount > this.balance) {
            console.log('Insufficient balance.');
        } else {
            console.log('Withdrawal amount must be positive.');
        }
    }

    check_balance() {
        console.log(`Current Balance: ${this.balance}`);
        return this.balance;
    }
    displaydetails(){
        console.log(`Acc Holde Name: ${this.acc_holder_name}`);
        console.log(`Acc Number: ${this.acc_no}`);
        console.log(`Available Balance: ${this.balance}`);

    }
}


let myAccount = new Account('John Doe', '123456789', 1000);
myAccount.deposit(500);
myAccount.withdraw(2000);
myAccount.check_balance();

class savings extends Account{
    constructor(acc_holder_name, acc_no, balance, interest=0.02) {
        super(acc_holder_name,acc_no,balance);
        this.interest=interest;
    }
    deposit(amount){
        const interestamount=amount*this.interest/100;
        super.deposit(amount+interestamount);
    }
    displaydetails(){
        super.displaydetails();
        console.log(`Interest rate; ${this.interest}`);
    }
}
class CurrentAccount extends Account{
    constructor(acc_holder_name, acc_no, balance, overdraft=500) {
        super(acc_holder_name,acc_no,balance);
        this.overdraft=overdraft;
    }
    withdraw(amount){
        if(this.balance>=this.balance+this.overdraft){
            super.withdraw(amount);
        }else{
            console.log("No sufficient balance");
        }
    }
    displaydetails(){
        super.displaydetails();
        console.log(`Overdraft; ${this.overdraft}`);
    }
}


class userinterface{
    constructor(){
        this.acc=null;
    }
    createaccount(){
        this.acc=new savings('Harsh','891328',100000);
    }
    check_balance(){
        console.log('balance: '+this.acc.check_balance());
    }
    getdetails(){
        this.acc.displaydetails();
    }
    deposit(amount){
        this.acc.deposit(amount);
    }
    withdraw(amount){
        this.acc.withdraw(amount);
    }
}

const ui=new userinterface();
ui.createaccount();
ui.deposit(3000);
ui.withdraw(2000);
ui.getdetails();




