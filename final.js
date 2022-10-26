// function saysomething(message){
//     return message
// }
// function dosomething(n2){
//     return saysomething(n2)
// }
// // console.log(dosomething())
// // console.log(saysomething())
// console.log(dosomething('dsds'))
// // let doIt=dosomething()
// // console.log(doIt('dsada'))

const { arrayBuffer } = require("stream/consumers");

// function add (n1,n2){
//     return n1+n2
// }

// let sum=add()

// console.log(sum)

// let num =1n
// console.log(num)

// let str1 = 'id1'
// let str2 = 'id1'
// console.log(str1===str2)

// let num = 5
// if(typeof num === 'number'){
//     console.log('number เว้ย')
// }

// let a = 'dsad'
// let b = a.toUpperCase()
// console.log(b)

// if(true){
//     console.log('dsdsd')
// }

// let a = {id:123 , ss:'sdd'}

// for(const loop in a){
//     console.log(a[loop])
// }

// console.log(Math.floor(Math.random()*(4-1+1)+1))

// let a = [23,320,4210,5]

// console.log(a.sort((x,y)=> x-y))
// let str1 = 'Hello'
// console.log(str1.charAt(str1.length[str1.length[2]]))

// let a1 = 1
// let a2 = a1
// a2 = 10

// console.log(a1)
// console.log(a2)
// console.log(a1)

//  aaa(['a','b','c','a','b','d'])

// function aaa(x){
//     let a1 = 0
//     let b1 = 0 
//     let c1 = 0
//     for(const loop of x){
//         switch(loop){
//             case 'a':
//             ++a1
//             break
//             case 'b':
//             ++b1
//             break
//             case 'c':
//             ++c1
//             break
//         }
//     }
//     console.log(`a=${a1} b=${b1} c=${c1}`)
// }

// function n1(x){
//     return x
// }

// function n2(){
//     return n1
// }

// let n3 = n2() // let  n3 = n1
// // let n3() = n1()
// console.log(n3(3))

// function a(x){
//     for(const loop of x){
//         console.log(loop)
//         return loop 
//     }
// }

// a([null,2,3,4])

// let a = [{id:1, stdname:'best'},{id:2, stdname:'shell'}]

// for(const loop of a){
//     if(loop.stdname == 'shell'){
//         console.log( loop.stdname = 'dsad')
//     }
//     else{
//         console.log(loop.stdname)
//     }
// }

// let a = new Array(1,2,3)
// console.log(a)

// let a = Array.of(3)
// let b = Array.from(a)

// let a1 = [2]
// let b1 = a1
// let c1 = [2]
// console.log(a == b)
// console.log(b)
// console.log(a1 == b1)

// console.log(a1 == c1)
// let a =[1,2,3]
// console.log(a[false])
// console.log(a[0])

// let a = [1,2,3]
// let b = [4,5,6]
// let c = [7,8,9]
// let d = a.concat(c,b)
// console.log(d.sort((x,y) => x-y))


// function a(x){
//     return x 
// }

// function b(){
//     return a
// }
// let c = b()
// console.log(c)

// function n1(x){
//     return x
// }

// function n2(){
//     return n1
// }

// let n3 = n2() // let  n3 = n1
// // let n3() = n1()
// console.log(n3(3))

// let a = []
// let b = {}

// if(JSON.stringify(b) === '{}'){
//     console.log('empty array')
//     return 'empty array'
// }
// else{
//     console.log('noting')
//     return 'not'
// }

// let a = ['sdadasd',2,3,4]
// let b = ['dsdadds'] // [1,2,3,4, []]
// // console.log(a.concat(b))
// // console.log(b[0].length)
// for(const loop of a){
    
//     if(loop.length == b[0].length)
//     b.push(loop)
// }
// console.log(b)
// getMaxLengthString(['hello', 'hi', 'hey', 'Good Evening', 'Good Morning']) 
// function getMaxLengthString(arrayOfString) {

//     if(arrayOfString === undefined || arrayOfString === null){
//       return undefined
//     }
//     else{
//       let ans = []
//       arrayOfString.sort((x,y) => y.length - x.length)
//       ans.push(arrayOfString[0])
//       for(const loop of arrayOfString){
//         if(loop.length == arrayOfString[0].length && loop !== arrayOfString[0]){
//           ans.push(loop)
//         }
//       }
//         console.log(arrayOfString)
//       console.log(ans)
//       return ans
//       }
//     }


// let a = [1,2,3,4]
// let b = 4
// for(const loop of a){
//     if(loop == 4){
//         console.log('จริง')
//     }

// }

let a = {}
console.log(JSON.stringify(a)==='{}')