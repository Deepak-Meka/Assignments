class Caccount{
    bankId:number
    bankName:string
    bankaccountno:number
    constructor(id:number,name:string,accountno:number){
        this.bankId=id;
        this.bankName=name;
        this.bankaccountno=accountno;
    }
    getSavingData(){
        return `My Id is ${this.bankId} My Bank name is ${this.bankName} My accountno is ${this.bankaccountno} gives 5% intrest `
    }
    getRecurringData(){
        return `My Id is ${this.bankId} My Bank name is ${this.bankName} My accountno is ${this.bankaccountno} gives 7% intrest `
    }
    getFixedData(){
        return `My Id is ${this.bankId} My Bank name is ${this.bankName} My accountno is ${this.bankaccountno} gives 9% intrest `
    }
}
    let e1=new Caccount(101,'sbi',23413444534);
    let e2=new Caccount(171,'hdfc',43413444538);
    let e3=new Caccount(101,'icici',8003344534);
    console.log(e1.getSavingData())
    console.log(e2.getRecurringData())
    console.log(e3.getFixedData())
    
    
