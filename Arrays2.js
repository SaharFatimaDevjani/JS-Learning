// 02: Arrays
// sumArray([1,2,3,4]) → 10 (use a for loop, not reduce)
function sumArray(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
}
    return sum
}
console.log(sumArray([1,2,3,4]))


// findMax([3,9,1,7]) → 9 (use a loop, not Math.max)
function findMax(arr){
    let count = 1
    let max = arr[0]
    while(count<arr.length){
       if(arr[count]>max){
        max = arr[count]
       }
         count++
    }
    return max
}
console.log(findMax([3,9,1,7]))


// removeDuplicates([1,2,2,3,3]) → [1,2,3]
function removeDuplicates(arr){
    let arr1 = arr
    let set = new Set(arr1)
    arr1 = [...set]
    return arr1
}
console.log(removeDuplicates([1,2,2,3,3]))


// combine([1,2],[3,4]) → [1,2,3,4] without changing the original arrays
function combine(arr1,arr2){
    let arr3 = [...arr1,...arr2]
    return arr3
}
console.log(combine([1,2],[3,4]))


// flatten([1,[2,3],[4,[5]]]) → [1,2,3,4,5]
function flatten(arr){
    arr = arr.flat(Infinity)
    return arr
}
console.log(flatten([1,[2,3],[4,[5]]]))


// chunk([1,2,3,4,5], 2) → [[1,2],[3,4],[5]]
function chunk(arr,chunk){
    let final = []
    let chunkArr = []
    for(let i=0;i<arr.length;i++){
        chunkArr.push(arr[i])
        if(chunkArr.length == chunk){
            final.push(chunkArr)
            chunkArr = []
        }else if(i == arr.length-1){
            final.push(chunkArr)
        }
    }
    return final
}
console.log(chunk([1,2,3,4,5], 2))

// another solution
function chunk2(arr,chunk){
    let final = []
    for(let i=0; i<arr.length;i+=chunk){
        final.push(arr.slice(i,i+chunk))
    }
    return final
}
console.log(chunk2([1,2,3,4,5], 2))


// another solution
function chunk3(arr,chunk){
    let final = []
    let chunks = (Math.ceil(arr.length/chunk))
    for(let i=0; i<chunks;i++){
        final.push(arr.splice(0,chunk))
    }
    return final
}
console.log(chunk3([1,2,3,4,5], 2))


// sortNumbers([10,1,5,100]) → [1,5,10,100] (first try .sort() without anything and see what goes wrong)
function sortNumbers(arr){

    return arr.sort((a,b)=>a-b)
}
console.log(sortNumbers([10,1,5,100]))