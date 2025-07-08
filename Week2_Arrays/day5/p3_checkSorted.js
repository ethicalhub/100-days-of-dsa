// Check if the array is sorted

let array1 = [10,12,12,12,18]
let array2 = [10,8,14,6,18]
let array3 = [12,11,10,9,8]

// for ascending
const isArraySorted = (array)=>{
    for(let i=0; i<array.length - 1; i++){
        if(array[i+1]<array[i]){
            return false
        }
    }

    return true;
}

// check both way
const isSortedEitherWay = (array) => {
    let isAscending = true;
    let isDescending = true;

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) isAscending = false;
        if (array[i] < array[i + 1]) isDescending = false;
    }

    return isAscending || isDescending;
}

// TC- O(n)
// SC- O(1)

console.log(isArraySorted(array1))
console.log(isArraySorted(array2))
console.log(isSortedEitherWay(array3))