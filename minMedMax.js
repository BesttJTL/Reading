// const { template } = require('@babel/core')

// function minMedMax(n1, n2, n3) {
//   if(n1>n2 && n1>n3){
//     max=n1
// if(n2>n3){
//     mid=n2
//     min=n3
// }
// else{
//     mid=n3
//     min=n2
// }
// }
// if(n2>n3 && n2>n1){
//     max=n2
// if(n3>n1){
//     mid=n3
//     min=n1
// }
// else{
//     mid=n1
//     min=n3
// }
// }   
// if(n3>n1 && n3>n2){
//     max=n3
// if(n1>n2){
//     mid=n1
//     min=n2
// }
// else{
//     mid=n2
//     min=n1
// }
// }
// return {min: min, mid: mid, max: max}
// }
// module.exports = minMedMax
arrayOfString = ['hello','hi','hey']
let y = ""
for (let i = 0; i < arrayOfString.length; i++){
    y +=arrayOfString[y]
    console.log(y)
}