// Create a function that takes an array as input, and if there's 0 present in the array... it push all the zero to the end

 
let array = [0,10,20, 30,0, 0,0,0,0 ,0 ,0,50 ] //expected output = [10,30,40,50,0,0,0,0]


// Solution 1 
// TC - O(n^2)
// SC - O(1)
const moveZeroesToEnd = (array)=>{
     for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === 0 && array[i + 1] !== 0) {
            array[i] = array[i + 1];
            array[i + 1] = 0;
            i = i - 2;
            if (i < -1) i = -1; 
        }
    }

    return array
}



// [0,1,0,3,12]

const moveZeroesToEnd2 = (array)=>{
    for(let i=0; i<array.length; i++){
        if(array[i]===0){
            for(let j=i+1; j<array.length; j++){
                if(array[j] !== 0){
                    let temp = array[i]
                    array[i] = array[j]
                    array[j] = temp;
                    break;
                }
            }
        }
    }

    return array
}



const moveZeroesToEnd3 = (array)=>{
    let nonZeroCount = 0;

    for(let i=0; i<array.length; i++){
        if(array[i]!==0){
            let temp = array[nonZeroCount]
            array[nonZeroCount] = array[i];
            array[i] = temp

            nonZeroCount++;
        }
    }


   return array;
}





console.log(moveZeroesToEnd(array))
console.log(moveZeroesToEnd2([0,1,0,3,12]))
// console.log(moveZeroesToEnd3([0,1,0,3,12]))
console.log(moveZeroesToEnd3(array))