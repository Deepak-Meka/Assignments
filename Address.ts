 class Address{
    city:string
    getAddressInfo(city){
        this.city=city
        return `My city is ${city}`  
      }
}
let p=new Address
export {p}