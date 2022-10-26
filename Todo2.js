const Todo=require('./todo.js')
function todoManagement(){
    let todos=[]
    function addTodo(desc){
        //[{ id: 1, description: 'online learning' }, { id: 2, description: 'xxx' }]        
        //add in the end of todos array     
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
const  {addTodo, removeTodo, findTodo, getTodos}=todoManagement()
addTodo('online learning')
addTodo('reading books')
addTodo('watch movies')
removeTodo(2)
console.log(getTodos())
console.log(findTodo(1))