// Write a function to reverse an array


let array = [1,2,3,4,5,6,6,6]

// Solution 1
const reversedArray = (array) => {
    let res = [];
    for (let i = array.length - 1; i >= 0; i--) {
        res.push(array[i]);
    }
    return res;
};
// TC- O(n)
// SC- O(n)

const reverserdArrayInPlace = (array)=>{
    let low = 0;
    let high = array.length - 1;
    let temp;

    while(low<high){
        temp = array[high]
        array[high]= array[low]
        array[low] = temp;
        low++;
        high--
    }

    console.log(array)
    return array;
    
}

// TC- O(n)
// SC- O(1)

console.log(reversedArray(array))
console.log(reverserdArrayInPlace(array))