var Caccount = /** @class */ (function () {
    function Caccount(id, name, accountno) {
        this.bankId = id;
        this.bankName = name;
        this.bankaccountno = accountno;
    }
    Caccount.prototype.getSavingData = function () {
        return "My Id is " + this.bankId + " My Bank name is " + this.bankName + " My accountno is " + this.bankaccountno + " gives 5% intrest ";
    };
    Caccount.prototype.getRecurringData = function () {
        return "My Id is " + this.bankId + " My Bank name is " + this.bankName + " My accountno is " + this.bankaccountno + " gives 7% intrest ";
    };
    Caccount.prototype.getFixedData = function () {
        return "My Id is " + this.bankId + " My Bank name is " + this.bankName + " My accountno is " + this.bankaccountno + " gives 9% intrest ";
    };
    return Caccount;
}());
var e1 = new Caccount(101, 'sbi', 23413444534);
var e2 = new Caccount(171, 'hdfc', 43413444538);
var e3 = new Caccount(101, 'icici', 8003344534);
console.log(e1.getSavingData());
console.log(e2.getRecurringData());
console.log(e3.getFixedData());
