// Just realised that we already solved it in basic, on day 1.. but it came again in Array.. so keeping it here for now
// Write a function which return the highest element present in the provided as input

let array = [3,5,1,34,23,15,73, 73]


const findLargestElement = (array)=>{
    let max = -Infinity;
    for(let i=0; i<array.length; i++){
        if(array[i] > max){
            max = array[i]
        }
    }

    return max;
}

console.log(findLargestElement(array))
// TC = O(n)
// SC = O(1)
// Math.max(...array); - JS builtin