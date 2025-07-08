// Just realised that we already solved it in basic, on day 1.. but it came again in Array.. so keeping it here for now
// find second largest number of the given array

let array = [3,5,1,34,23,15,73,73,34, 84, 83]

const findSecondLargest = (array)=>{
    let max = -Infinity;
    let secondMax= -Infinity;

    for(let i=0; i<array.length; i++){
        if(array[i]>max){
            secondMax = max;
            max = array[i]

        } else if(array[i] > secondMax && array[i] !== max){
            secondMax = array[i]
        }

       
    }
    return secondMax === -Infinity ? null : secondMax;
}
TC- O(n)
SC- O(1)
console.log(findSecondLargest(array))

