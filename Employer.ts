import {p} from './Address'
import {b} from './Bank'
class Employer{
    name:string
    getEmployerInfo(name){
        this.name=name
        return `My Customer name ${name} `
    }
    getInfo(){
        console.log(p.getAddressInfo('khammam'))
         console.log(b.getBankInfo(12355466))
    }
}
class Employee extends Employer{
    salary:number
    getEmployee(salary){
        this.salary=salary
        return `My salary is : ${salary}`
    }
}



let e1=new Employee()
console.log(e1.getEmployerInfo('Divya'))
console.log(e1.getInfo())
console.log(e1.getEmployee(200000))