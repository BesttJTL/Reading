const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
    if(word==null || word==undefined){
        //console.log (undefined)
        return undefined
    }
    /* ยัง งง อยู่ครับผมว่าทำไมต้องใช้ includes เพื่อนสอนยังไม่ค่อยเข้าใจ
    วอนผู้รู้ช่วย comment ทีครับผม */
    else if(word.includes(startWord)){ //คำใหญ่ อยู่ใน คำเล็ก 
    //console.log(word)
    return word
   }
   else{
    //console.log(word=startWord+word)
    return word=startWord+word
   }
}
module.exports = fillStartWord

/*fillStartWord("1-2565-","helloWorld")
fillStartWord("JS","beginner")
fillStartWord("first","firststep")
fillStartWord("first",null)
fillStartWord("first",undefined)*/