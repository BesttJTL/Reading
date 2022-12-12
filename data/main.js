import {students} from "./students.js"
import {lecturers} from "./lecturers.js"
const divButton = document.getElementById("buttonPanel")

const studentButton = divButton.children[0]
const lecturersButton = divButton.children[1]

// const stundentHandler= () =>{
//     // studentButton.removeEventListener("click",stundentHandler)
//     const dataList = document.getElementById("dataList")
//     const uladd = dataList.children[0]
//     uladd.textContent=''
//     for(const loop of students){
//         const createLi = document.createElement("li")
//         createLi.textContent=`ID: ${loop.id}, NAME:${loop.name}`
//         uladd.appendChild(createLi)
//     }
// }

// const lecturersHandler = () =>{
//     const dataList = document.getElementById("dataList")
//     const uladd = dataList.children[0]
//     uladd.textContent=''
//     for(const loop of lecturers){
//         const createLi = document.createElement("li")
//         createLi.textContent=`ID: ${loop.id}, NAME:${loop.name}`
//         uladd.appendChild(createLi)
//     }
// }

const show = (x) =>{
    // alert(x.target.id)
    // x = x.target.id === '1' ?students:lecturers
    if(x.target.id === '1'){
        x = students
    }
    else{
        x = lecturers
    }
    const addLo = document.querySelector("ul")
    addLo.textContent=''

        for(const loop of x){
        const createli = document.createElement("li")
        createli.textContent=`ID:${loop.id}, NAME:${loop.name}`
        addLo.appendChild(createli)

    }
}

// const check1 = () => {show(students)}
studentButton.addEventListener('mousemove',show)
// const check2 = () => {show(lecturers)}
lecturersButton.addEventListener('mousemove',show)
///////////////////////////////////////////////////////////////////
const inputElement=document.getElementById("searchValue")
console.log(inputElement)
const pElement=document.getElementById('display')

inputElement.addEventListener('keypress',(event,x)=>{
        if(event.key==='Enter')
            pElement.textContent=inputElement.value
    })

    // inputElement.addEventListener('input',()=>{
    // pElement.textContent=inputElement.value})

/////////////////////////////////////////////////////////////////
//create student handler 

// studentButton.addEventListener('click',(event) => {
//     alert(`hello, student button!
//     event target: ${event.target}
//     event target id : ${event.target.id}
//     event type : ${event.type}
//     event current target : ${event.currentTarget}
//     event phase : ${event.eventPhase}
//     `)
// },true)

// divButton.addEventListener('click',(event) => {
//     alert(`hello, div parent!
//     event target: ${event.target}
//     event target id : ${event.target.id}
//     event type : ${event.type}
//     event current target : ${event.currentTarget}
//     event phase : ${event.eventPhase}`)
// },true)

// const studentHandler = () => {
//     alert('good bye')
// }

// lecturersButton.addEventListener('click',studentHandler,false)
/////////////////////////////////////////////////////////////////////////
// /ddEventListener('click', studentHandler)
// const lecturerHandler=()=>/ import { students } from "./data/students.js"import { lecturers } from "./data/lecturers.js"const divButton=document.getElementById("buttonPanel")
// // console.log(divButton)const studentButton=divButton.children[0]
// const lecturerButton=divButton.children[1]
// const dataListHandler=(items)=>{
//     const ulParentElement=document.querySelector('ul')
//     ulParentElement.textContent=''   
//     for(let i=0;i<items.length;i++){
//         const liElement=document.createElement('li') 
//         let textValue=''        
//         for (const key in items[i]){           
//            textValue=textValue+ `${key}: ${items[i][key]} `        
//         }
//        liElement.textContent=textValue        
//        ulParentElement.appendChild(liElement)
//    }
// }
// const studentHandler=()=>{dataListHandler(students)}
// studentButton.a{dataListHandler(lecturers)}
// lecturerButton.addEventListener('click', lecturerHandler)
/////////////////////////////////////////////////////////////////////