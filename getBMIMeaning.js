const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  //console.log(BMI=weight/(height*height))
  let BMI=weight/(height*height)
  if(BMI<=18.5){
      //console.log('Underweight')
      return 'Underweight'
  }
  else if (BMI>=18.5 && BMI<=24.9){
      //console.log('Normal weight')
      return 'Normal weight'
  }
  else{
      //console.log('Overweight')
      return 'Overweight'
  }
}

function getBMIMeaning(weight, height) {
  return calculateBMI(weight,height)
}


module.exports = getBMIMeaning
// getBMIMeaning(65, 1.8)
// getBMIMeaning(80, 1.7)
// getBMIMeaning(44, 1.6)

// calculateBMI(65, 1.8)
// calculateBMI(80, 1.7)
// calculateBMI(44, 1.6)