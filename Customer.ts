import {p} from './Address'
import {b} from './Bank'
class Customer{
    name:string
    getCustomerInfo(name){
        this.name=name
        return `The Account Holder name is ${this.name}`
    }

 getData(){
console.log(p.getAddressInfo('khammam'))
console.log(b.getBankInfo(12355466))
}
}
let c=new Customer()
console.log(c.getCustomerInfo('deepak'))
console.log(c.getData())