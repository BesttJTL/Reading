// class Person{
//     constructor (firstName='N/A', lastName='N/A', dateOfBirth=new Date(Date.now())){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.dateOfBirth = new Date(dateOfBirth)
//     }
//     getFullname(){
//         return `Fullname : ${this.lastName} ${this.firstName}`
//     }
//     getAge(){
//         let x = new Date(Date.now())
//         return `Age : ${x.getFullYear() - this.dateOfBirth.getFullYear()}` 
//     }
//     //เปรียบเทียบ firstName และ LastName นี้กับอ็อบเจ็กต์บุคคลอื่นที่ระบุ ส่งคืนค่าเท็จหากชื่อเต็มแตกต่างกันและเป็นจริงหากเหมือนกัน
//     isEqual(anotherPerson){
//         return anotherPerson.firstName===this.firstName && anotherPerson.lastName===this.lastName
//     } // ทำเป็น String 
//     toString(){
//         return `${this.getFullname()} and ${this.getAge()}`
//     }
// }
// const person1 = new Person('Jatala','Jarusirikul','05/27/2003')
// const person2 = new Person('Purin','DDDD','02/20/2000')
// const person3 = new Person('Jatala','Jarusirikul')

// console.log(person1.getFullname())
// console.log('-----------------------')
// console.log(person1.getAge())
// console.log('-----------------------')
// console.log(person1.isEqual(person3))
// console.log('-----------------------')
// console.log(person1.toString())
// console.log(typeof person1.toString())

class Person{      
    constructor(firstName='N/A',lastName='N/A',dateOfBirth=new Date(Date.now())){
    this.firstName = firstName
    this.lastName = lastName
    this.dateOfBirth = dateOfBirth
    }
    getFullname(){
        return `${this.firstName} ${this.lastName}`
    }
    getAge(){
        const diff_ns = Date.now() - this.dateOfBirth.getTime() 
        const diff_date = new Date(diff_ns)
        return diff_date.getUTCFullYear()-1970
        // ไว้ใช้สำหรับเจาะจงวันเดือนปีไม่ให้ผิดพลาด
    }
}

const p1 = new Person(undefined,'sadsad')
const p2 = new Person('Jatala','Jarusirikul')

// console.log(p2.getFullname())
// console.log(p1.getAge())

//การเพิ่ม function เข้าไปใน class
function compare(anotherPerson){
    return this?.firstName?.toLowerCase() === anotherPerson?.firstName?.toLowerCase() && 
    this?.lastName?.toLowerCase() === anotherPerson?.lastName?.toLowerCase()
}

Person.prototype.isEqual=compare // เเอด 1
//////////////////////////////////////////
Person.prototype.isEqual=function(anotherPerson){ // เเอด 2
    return this?.firstName?.toLowerCase() === anotherPerson?.firstName?.toLowerCase() && 
    this?.lastName?.toLowerCase() === anotherPerson?.lastName?.toLowerCase()
}

// console.log(Person.prototype)
// console.log(p1.isEqual(p2))

Person.prototype.toString = function() {
    return `fullname: ${this.getFullname()}, age: ${this.getAge()}`
}
// console.log(p1.toString())
const x = (new Date(20,05,2020))

console.log(x.getFullYear())

const obj1={}
const obj2={id:1, product:'pen'}
//way#1
console.log(JSON.stringify(obj1)==='{}'?'empty':'not empty')
console.log(JSON.stringify(obj2)==='{}'?'empty':'not empty')
//way#2
console.log(Object.keys(obj1))
console.log(Object.keys(obj1).length===0?'empty':'not empty')
console.log(Object.keys(obj2))
console.log(Object.keys(obj2).length===0?'empty':'not empty')

const buyer={
    id:1234,
    fullname:{
        firstName: 'Jatala',
        lastName: 'Jarusirikul'
    },
    totalPoints:1000
}

const address={
    no: 555,
    street: 'ppp',
    province: 'Bangkok'
}
//spread operator
//merge
const buyerProfile={...buyer,...address}
console.log(buyerProfile)
//copy with replace
const newBuyer={...buyer, totalPoints:0}
console.log(newBuyer)
console.log('//////////////////////')

// destuction
const {fullname:myfullname} = buyer
console.log(myfullname)

const {firstName:myfullname2} = buyer.fullname
console.log(myfullname2)

const {fullname:{lastName, firstName}} = buyer
console.log(firstName)
console.log(lastName)

//rest
const {id, ...buyerDetails} =buyer
console.log(id)
console.log(buyerDetails)
console.log('//////////////////')
console.log(buyer)

const products=[
    {productid:1, productName:'Pen'},
    {productid:2, productName: 'Notebook'}
]
const [,{productid:pp}] = products
console.log(pp)