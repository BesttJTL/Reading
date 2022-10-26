// test(['a','b','a','b','c'])
// function test(countabc){
//     let a = 0
//     let b = 0
//     let c = 0
//     for(let loop of countabc){
//     switch(loop){
//         case 'a':
//         a++
//         break;
//         case 'b':
//         b++
//         break;
//         case 'c':
//         c++
//         break;
//     }
// }
//     console.log(`a = ${a},b = ${b}, c = ${c}`)
// }
// ข้อ 1
// var is_array = function(input) {
//     if(toString.call(input) === "[object Array]")
//     return true
//     return false   
//       }
//       console.log(is_array('w3resource'))
//       console.log(is_array([1, 2, 4, 0]))
//       console.log('-----')
// let is_array2 = (input) => {
//     if(input === "[object Array]")
//     return true
//     return false
// } 
// console.log(is_array2('w3resource'))
// console.log(is_array2([1, 2, 4, 0]))
// console.log('-----')
// let num = 6
// let text = num.toString()
// console.log(text)
// console.log(typeof num)
// console.log(typeof text)
/////////////////////////////////
// let profile = {
//     id : 123,
//     interests:['music','skiing']
// }
// profile.interests[profile.interests.length-1] = 'reading'
// console.log(profile.interests) // object.propertykey
// console.log(profile['interests']) //object[propertykey]
// console.log([profile.interests[0]])

// console.log('-------------')
// let book ={
//     isbn : 123456789,
//     author :{
//             firstname: 'Umapon',
//             lastname: 'Sup'
//     }
// }
// console.log(book.author)
// book.author.firstname = 'Jatala'
// book.author.lastname = 'Jarusirikul'
// book.author['last' + 'name'] = 'Jaidee' // 
// console.log(book.author)

// class point{
//     constructor(x = 0, y = 0){
//         this.x = x
//         this.y = y
//     }
//     compare(anthorPoint){
//         console.log(`this.x =${this.x},this.y=${this.y}, anthorPoint.x=${anthorPoint.x} anotherPoint.y=${anthorPoint.y}`)
//         // return Math.sqrt((this.x - anotherPoint.x) ** 2 + (this.y - anotherPoint.y)** 2)
//     }
// }
// const p1=new point(1,2)
// let p2=new point(4,5)
// console.log(p1.compare(p2))
// console.log(p2.compare(p2))
// console.log('-----')

// console.log(Object.prototype.isPrototypeOf(p1))
// console.log(point.prototype.isPrototypeOf(p1))

let subject ={id:1, title:'int201'}
// console.log(Object.prototype.isPrototypeOf(subject))
// console.log(point.prototype.isPrototypeOf(subject))

const lectSubject=Object.create(subject)
// console.log(subject)
// console.log(lectSubject)
// console.log(lectSubject.id)
// console.log(lectSubject.title)
// lectSubject.title='int222'
// console.log(lectSubject.title)

// let square1 = {
//     side: 5,
//     //area: function(){
//     area(){
//         return this.side * this.side
//     }
// }
// console.log(square1.side)
// console.log(square1.area())

// let square2={
//     side: 3,
//     //area: function(){
//     area(){
//         return this.side * this.side
//     }
// }
// console.log(square2.side)
// console.log(square2.area())
// ต้องทำหลายครั้งซ้ำซ้อน
// class /////////////////////////
// class Square{
//     constructor(side){
//         this.side = side
//     }
//     area(){
//         return this.side*this.side
//     }
// }
// const square1 = new Square(5)
// const square2 = new Square(3)

// console.log(square1.side)
// console.log(square1.area())
// console.log(square2.side)
// console.log(square2.area())

// function Square(side){
//     this.side=side
// }
// function getArea(){
//     return this.side * this.side
// }

// const sq1=new Square(3)
// console.log(sq1)
// sq1.area=getArea
// console.log(sq1.area())

// const sq2=new Square(5)
// console.log(sq2)
// sq2.area=getArea
// console.log(sq2.area())

// class point{
//     constructor(x = 0, y = 0){
//         this.x = x
//         this.y = y
//     }
//     compare(anthorPoint){
//         return this.x===anthorPoint.x && 
//         this.y=== anthorPoint.y  /////////////////////////////////////////
//     }
// }
// const p1=new point(1,2)
// let p2=new point(1,2)
// console.log(p1.compare(p2)) //ถูก
// console.log(p1==p2) // ผิด 
// console.log(p1===p2) // ผิด

// let book1 = {
//     isbn: 123456789,
//     title: "JavaScript"
// }
// let bookKeys=Object.keys(book1)
// let bookValues=Object.values(book1)

// console.log(bookKeys)
// console.log(bookValues)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// console.log(p1.id)
// class Person{      
//     constructor(firstName='N/A',lastName='N/A',dateOfBirth=new Date(Date.now()))
// }
// const p1 = new Person('SDAdASdadasd')
//////////////////////////////////////////////
// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// test เฉพาะ boolean โดยให้คำตอบเป็น boolean
// const a = [10,20,30,40,50]
// const b = a.every(x => x > 50)
// console.log(b)

// const b1 = a.filter( x => x > 20)

// console.log(b1)
// abc([100,20,30,40])

// const b = abc.filter(x => x >50)

// ggg([10,20,30,40])

// function ggg(x){
//  const y = x.filter(function (number){
//     return number > 10
//  })
//  console.log(y)
// }
// xxx(null)
// xxx(undefined)
// xxx(['fsdasddsd','dsdsdds','sdsddsd'])
// xxx(['fire','free','form'])
// function xxx(y){
//     const check = y.filter(function (check2){
//         const x = 'form'
//         return !check2.includes(x)
//     })
//     console.log(check)
// }

// function xxx(y){
//     if(y !== null && y !== undefined){
//         let ans = []
//         let x = 'form'
//        if(y.includes(x)){
//         for(let loop of y){
//             if(loop !== 'form'){
//             ans.push(loop)
//             }
//         }
//        }
//        console.log(ans)
//     }
// }
