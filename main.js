// //arrays 
// let profile = {
//     id : 123,
//     interests: ['music','skiing']
// }
// profile.interests[profile.interests.length-1]='free'
// console.log(profile.interests)
// //objects
// let book = { 
//     isbn: 123,
//     title: "JavaScript",
//     author: {
//         firstname: 'Umaporn',
//         lastname: 'Sup'
//     }
// }

// book.author.firstname='jatala'
// book.author.lastname='jarusirikul'
// console.log(book)

// class Polygon{
//     constructor(name) {
//         this.name = name
//     }
// }

// const poly1 = new Polygon('best')
// console.log(poly1)

// let subject = {id:1, title:'int201'}
// const lectSubject= Object.create(subject)
// console.log(lectSubject.title)
// lectSubject.title = 'asdsad'
// console.log(lectSubject.title)
// console.log(subject)

// class Person{
//     constructor(firstName='N/A', lastName='N/A', dateofBirth = new Date(Date.now)){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.dateofBirth = dateofBirth
//     }
//     getFullName(){
//         return `${this.lastName}, ${this.firstName}`
//     }
//     getAge(){
//         const diff_ms = Date.now()- this.dateofBirth.getTime()
//         const diff_date = new Date(diff_ms)
//         return diff_date.getUTCFullYear()-1970
//     }
// }

// const p1 = new Person('Jatala','Jarusirikul',new Date(2003,4,27))
// const p2 = new Person()
// console.log(p2)
// const p3 = {id:1,name:'sdad'}
// Person.prototype.tostring= function (){
//     return `fullname: ${this.getFullName()}, age: ${this.getAge()}`
// }

// console.log(p1.tostring())

// const buyer = {
//     id:1234,
//     fullName:{
//         firstName: 'sdsd',lastName: '2222'
//     },
//     totalPoint: 1000
// }

// const {fullName:{firstName, lastName}} = buyer
// console.log(firstName, lastName)

// const array1 = [1,2,3,4,5]
    // array1.forEach(arr => console.log(arr))

// const letters =['b','c','d','e','f','g','b','c','c','d','e','b']

// for (const loop of letters){
//     console.log(loop)
// }
// for(let i = 0; i < letters.length;i++){
//     console.log(letters[i])
// }
// const test = [2,2001,3,400,5,6,7,4,3,33]
// const test2 = ['a','ant','b','cde','hi','j']
// const zero = 0
// // console.log(test.every(x => x >= 3))
// // console.log(test.some(x => x >= 3))
// // console.log(test2.sort((a,b) => b.length-a.length))
// // console.log(test.reduce((x,y) => x+y,zero))
// const a = ['ant','max','bac']
// console.log(a.filter(x => x !== 'ant'))
// console.log(a)
// function ff(x){
//     return x > 4 
// }
// const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join());
// // expected output: "Fire,Air,Water"

// console.log(elements.join(''));
// // expected output: "FireAirWater"

// console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
// console.log(test.findIndex(x => x > 1))
// console.log(test.filter(x => x > 2))
// console.log(test.map(x => x - 3))

// let a = 0
// let b = 0
// let c = 0
// letters.forEach(item => {
//     if(count[item]){
//         count[item]++
//     }
//     else{
//         count[item] =1
//     }
// })
// console.log(count)
// function loops(){
//     for (const loop of letters){
//         switch(loop) {
//             case 'a':
//             a++
//             break;
//             case 'b':
//             b++
//             break;
//             case 'c':
//             c++
//             break;
//         }
//     }
//     if(a !== 0){
//         array2.push(`a:${a}`)
//     }
//     if(b !== 0){
//         array2.push(`b:${b}`)
//     }
//     if(c !== 0){
//         array2.push(`c:${c}`)
//     }
//     return array2
// }

// console.log(loops(letters))

// const products = [
//     {id: 123, name: 'bag'},
//     {id: 2, name: 'pen'},
//     {id: 33, name: 'BAG'}
// ]
// p2 = products.map(x => x.name)
// console.log(p2)
// let answer = []
// products.forEach(x => answer.push(x.name))
// console.log(answer)
// let answer2 = []
// for (const loop of products){
//     // answer2.push(loop.name)
//     console.log(loop.name)
// }
// console.log(answer2)
// const x = {id: 22}
// function check(){
//     if(JSON.stringify(x) === '{}'){
//         return true
//     }
//     else {return false}


// }
// console.log(check(x))


// const a = ['Fire', 'Air', 'Water']
// a.splice(0,1)
// console.log(a)



// const {fullname:{firstname:Best ,lastname}} = profile
// console.log(Best,lastname)

// const a =[1,2,3,4]
// a.push(5)
// console.log(a)
// const fn = x => x
// console.log(fn('hello, world'))

// function Objects(x,y){
//     return {id:x,name:y}
// }

// const a = new Objects(22,'best')


// console.log(a)

// const obj ={
//     x: 1,
//     y: 5,
//     xy(){
//         return this.x * this.y
//     }
// }
// console.log(obj.xy())
// console.log(Object.keys(obj))
// class Circle{
//     constructor(radius){
//         this.radius = radius
//     }
// }
// const obj1 = new Circle(2.5)
// console.log(obj1)
// const obj2 = Object.create(obj1)
// console.log(obj2.radius)
// const obj1 = {x: 'M', y: 35}
// const obj2 = {y: 'XL', z: 28}
// const obj3 = {...obj1,...obj2}
// console.log(obj3)

// const [,a] = [3,6,9]

// console.log(a)

// let profile = {
//     id : 123,
//     interests: ['music','skiing'],
//     fullname: {firstname: 'jatala',lastname: 'jarusirikul'}
// }
// const {id,fullname:{firstname}} = profile
// console.log(id)
// console.log(firstname)

// const {id:no,author} = {id:124,author:'suda'}
// console.log(no)
// console.log(author)
