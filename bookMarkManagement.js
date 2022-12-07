const { template } = require('@babel/core')
//write your student id, firstname, and lastname here
// 641305000007, jatala, jarusirikul
// class BookMark {
//   //code here
//   constructor(isbn, totalPages = 0){
//     this.isbn = isbn
//     this.bookMarks = []
//     this.totalPages = totalPages
//   }
//   addBookMark(pageNumber){
//     this.bookMarks.push(pageNumber)
//     this.bookMarks = this.bookMarks.filter(x => x >= 1 && x <= this.totalPages)
//     return this.bookMarks.length
//   }
//   removeBookMark(pageNumber){
//     const before = this.bookMarks.length
//     this.bookMarks = this.bookMarks.filter(y => y !== pageNumber) 
//     return this.bookMarks.length === before?undefined:pageNumber //ภาษาอังกฤษยากเกิ้น
//   }
//   goToFirstBookMark(){
//     if(this.bookMarks.length !== 0){
//       return this.bookMarks[0]
//     }
//     else {
//       return undefined
//     }
//   }
//   goToLastBookMark(){
//     if(this.bookMarks.length !== 0){
//       return this.bookMarks[this.bookMarks.length-1]
//     }
//     else {
//       return undefined
//     }
//   }
//   getBookMarks(){
//     return this.bookMarks
//   }
// }
class BookMark{
  constructor(isbn,totalPages = 0){
    this.isbn = isbn
    this.totalPages = totalPages
    this.bookMarks = []
  }
  addBookMark(pageNumber){
    if(pageNumber >= 1 && pageNumber <= this.totalPages){
      this.bookMarks.push(pageNumber)
    }
    return this.bookMarks.length
  }
  goToFirstBookMark(){
    return this.bookMarks[0]
  }
  goToLastBookMark(){
    return this.bookMarks[this.bookMarks.length-1]
  }
  removeBookMark(pageNumber){
    if(this.bookMarks.includes(pageNumber)){
      const cut = this.bookMarks.findIndex(x => x === pageNumber)
      this.bookMarks.splice(cut,1)
      return pageNumber
    }
    else{
      return undefined
    }
  }
  getBookMarks(){
    return this.bookMarks
  }
}
  module.exports = BookMark
