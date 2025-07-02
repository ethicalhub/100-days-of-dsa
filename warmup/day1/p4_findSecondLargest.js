function findSecondLargest(arr){
    let largest = -Infinity; 
    let secondLargest = -Infinity;

    if(arr.length < 2){
        return null; // Not enough elements to find the second largest
    }

    for(let i =0; i<arr.length; i++){
        if(arr[i]>largest){
            secondLargest = largest;
            largest = arr[i];
        } else if(arr[i] > secondLargest && arr[i] !== largest){
            secondLargest = arr[i];
        }
    }

    return secondLargest === -Infinity ? null : secondLargest;

}


const arr = [1, 2, 3, 4, 15, 6, 7, 8, 9, 10];
const secondLargestNumber = findSecondLargest(arr);
if(secondLargestNumber !== null){
    console.log(`Second largest number in the array: ${secondLargestNumber}`); // Output the second largest number
}
else{
    console.log("Not enough elements in the array to find the second largest number.");
}