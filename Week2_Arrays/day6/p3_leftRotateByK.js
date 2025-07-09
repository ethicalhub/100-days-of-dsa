// Create a function which left rotates the array by K  (in place)


let array = [3,4,5,7,8]  // output => [5,7,8,3,4]

// Solution 1, TC- O(n*k), SC- (1)

// There are more approches to optimize it, will work on it

const leftRotateByK = (array, k)=>{
    for(let i = 1; i<=k; i++){
        let temp = array[0];
        for(let j = 1; j <array.length; j++){
            array[j-1] = array[j];

        }
        array[array.length - 1] = temp;
    }

    return array;
}


// let array = [3,4,5,7,8]  // output => [7,8,3,4,5]

// Worked but not accepted on LeetCode
const rightRotateByK = (array, k)=>{
    console.log(array)
    for(let i=1; i<=k; i++){
        let temp = array[array.length - 1]
        console.log(temp)
        for(let j = array.length -1; j>0; j--){
            array[j] = array[j - 1]
        }
        array[0] = temp;
    }
    

    return array;
}


// console.log(leftRotateByK(array, 2))
console.log(rightRotateByK(array, 2))
