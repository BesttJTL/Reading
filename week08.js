// // //anonymous function with keyword 'function'
// // const getChar1=function (msg, index){
// //     return msg[index]
// // }
// // console.log(getChar1('hello world', 3))

// // //anonymous function with arrow function
// // const getChar2=(msg, index)=>{
// //     return msg[index]
// // }
// // console.log(getChar2('hello world', 3))

// class todo{
//     constructor (id="N/A",description="ไม่มีเว้ย"){
//         this.id = id
//         this.description = description
//     }
//     gettodo(){
//        return {id : this.id, description : this.description}
//     }
//     setdescription(newDescription){
//         // this.description = newDescription
//         return {id : this.id, description : newDescription.description}
//     }
// }

// const person1 = new todo(1,'somthing')
// const person2 = new todo(2)
// const person3 = new todo(3,'todo everything')
// // console.log(person1.gettodo())
// // console.log(typeof person1.gettodo())
// // console.log('-----------')
// // console.log(person2.setdescription(person3))
// // console.log('---------------')


// function todoList(){
//     let todos = []
    
//     function addTodo(desc){
//         todos.push(desc)
//         return todos
//     }
//     function removeTodo(removeId){
//         todos = todos.filter(x => x.id !== removeId)
//         return todos
//     }
//     function findTodo(searchId){
//         todos = todos.filter(x => x.id == searchId)
//         return todos
//     }
//     function getTodos(){
//         return todos
//     }
//     return {
//         addTodo,removeTodo,findTodo,getTodos
//     }
// }


// const {addTodo,removeTodo,findTodo,getTodos} = todoList()
// addTodo(person1.gettodo())
// addTodo(person2.gettodo())
// addTodo(person3.gettodo())
// removeTodo(1)
// findTodo(2)

// console.log(getTodos())
// console.log('-------')

const a = [10,20,30]
// a คือ array ที่สร้างขีึ้นมา 

// console.log(a.every(x => x >= 15))
// a มาใส่ method every เเละ กำหนดเงื่อนไขมันด้านหลังหรือจะใส่เป็นชื่อฟังก์ชันก็ได้เเบบด้านล่าง
function b(a){
    return a >= 5
}
// console.log(a.every(b))
// method นี้จะ return ออกมาเป็น boolean เเค่ true กับ false

let a2 = (x) => {
    return x >= 5
}
// let a2 = x => x>= 5
// console.log(a.every(a2))

const products = [
    { id: 123, name: 'bag' },
    { id: 2, name: 'pen' },
    { id: 33, name: 'BAG' }
 ]

 //foreach and push
 let productNames= []
 products.forEach(product => productNames.push(product.name))
 console.log(productNames)

 // map
const productName2=products.map(product => product.name)
console.log(productName2)

//ising map and filter
const productNameStartWithB = products.map(product => product.name).filter
(product=>product.toUpperCase().startsWith('B'))
console.log(productNameStartWithB)

console.log('---------')

console.log(products.map(x=>x.name))
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Todo{
    static runningId=1    
    constructor(desc){
        this.id=Todo.runningId++      
        this.description =desc    }
    getTodo(){
        return{id: this.id, description: this.description}
    }
    setDescription(newDesc){
        this.description=newDesc    }
}
const todo1=new Todo('online shopping')
console.log(todo1.getTodo())
const todo2=new Todo('watch movies')
console.log(todo2.getTodo())
const todo3=new Todo('exercises')
console.log(todo3.getTodo())
todo3.setDescription('visit mother')
console.log(todo3.getTodo())

function todoManagement(){
    let todos=[]
    function addTodo(desc){
      return todos.push( new Todo(desc))
    }
    function removeTodo(removeId){
       todos= todos.filter(todo=>todo.id!==removeId)
    }
    function findTodo(searchId){
       return todos.find(todo=>todo.id===searchId)
    }
    function getTodos(){return todos}
    return {addTodo, removeTodo, findTodo, getTodos}
}
//without object destructuring// const  todoList=todoManagement()// console.log(todoList.addTodo('online learning'))// console.log(todoList.addTodo('reading books'))// console.log(todoList.getTodos())//with object destructuring
const  {addTodo, removeTodo, findTodo, getTodos}=todoManagement()
console.log(addTodo('online learning'))
console.log(addTodo('reading books'))
console.log(addTodo('watch movies'))
console.log(getTodos())
removeTodo(2)
console.log(getTodos())
console.log(findTodo(1))