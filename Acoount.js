function Account(cId,cName,cAge){
    this.id=cId;
    this.name=cName;
    this.age=cAge;
}
var c1=new Account(1,'deepak',21)
var c2=new Account(2,'datta',23)
var c3=new Account(3,'hemanth',24)

console.log(c1.age,c1.name)
console.log(c2.id,c2.name)
console.log(c3.name,c3.id)