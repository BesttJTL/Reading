    concatArray([5, 10, 15], [2, 4, 6, 7])
    concatArray([ ], ['item1', 'item2', 'item3'])
    concatArray([10, 6, 5], [])
    concatArray([], [])
    concatArray(undefined, [2, 4, 6, 7])
    concatArray([2, 4, 6, 7], null)
    concatArray(undefined, undefined)
    concatArray(null, undefined)
    concatArray(undefined, null)
    concatArray(null, null)

function concatArray(array1, array2) {
    if (array1==undefined && array1==null && array2==undefined && array2==null){
        console.log(undefined)
    }
    else if(array1==undefined || array1==null  && array2==true){
        console.log(array2)
    }
    else if(array2==undefined || array2==null  && array1==true){
            console.log(array1)
   }
    else {
        let concatArrays = array1.concat(array2)
   console.log(concatArrays)
    }
}