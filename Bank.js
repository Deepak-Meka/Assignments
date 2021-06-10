var Customer={
    custId:101,
    custName:'deepak',
    custAcc:5474256,
    per:5,
    dis:40000
}
function getSavingAccount(){
    console.log('My Name is: '+Customer.custName+  '  my id is: '+Customer.custId+ '  my account is: '+Customer.custAcc)
}
function getRecurringDeposit(){
    console.log('bank interest is: '+Customer.per+'%')
}
function getDiscount(){
    console.log('bank deposit:'+Customer.dis)
}
getSavingAccount()
getRecurringDeposit()
getDiscount()