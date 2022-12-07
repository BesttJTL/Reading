class Todo{
    static runningId = 1
    constructor(desc){
        this.id=Todo.runningId++
        this.description=desc
    }
    // getTodo(){
    //     return {id:this.id,description:this.description}
    // }
    // setDescription(newdesc){
    //     this.description=newdesc
    // }
}

// const p1 = new Todo('สวัสดีครับ')
// const p2 = new Todo('ว่าไงครับผม')
// console.log(p1.getTodo())
// console.log(p2.getTodo())
// p2.setDescription('abcde')
// console.log(p2.getTodo())

function todoManagement(){
    let todos=[]
    function addTodo(desc){
        return todos.push(new Todo(desc))
    }
    function removeTodo(removeId){
        // todos = todos.filter(todo => todo.id!==removeId)
        for(let i = 0; i < todos.length; i++){
            if(todos[i].id === removeId){
                todos.splice(i,1)
            }
        }
    }
    function findTodo(searchId){
        return todos.find(todo => todo.id===searchId)
    }
    function getTodos(){
        return todos
    }
    return {addTodo,removeTodo,findTodo,getTodos}
}
const test = todoManagement()

console.log(test.addTodo('งงชิปเป้ง'))
console.log(test.addTodo('ว่าไงครับผม'))
console.log(test.getTodos())
// const {addTodo,removeTodo,findTodo,getTodos} = todoManagement()
// addTodo('สวัสดี')
// addTodo('ว่าไงครับเพื่อน')
// addTodo('อันที่3')

// removeTodo(2)
// console.log(getTodos())

// console.log(findTodo(2))

// function x(allitems,current,rowPerPage){
//     let head = (current-1)*rowPerPage
//     let down = head+rowPerPage
//     return allitems.slice(head,down)
// }

// console.log(x([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],2,5))