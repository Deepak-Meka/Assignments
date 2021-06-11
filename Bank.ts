 class Bank{
    accountNo:number
    getBankInfo(accountNo){
        this.accountNo=accountNo
        return `My Account No is ${this.accountNo}`
    }
}
let b=new Bank
export {b}