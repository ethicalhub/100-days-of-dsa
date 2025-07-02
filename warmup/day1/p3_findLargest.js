function findLargest(arr){
    let largest = arr[0];

    for(let i=0; i<arr.length; i++){
        if(arr[i]> largest){
            largest = arr[i]
        }
    }

    return largest; // Return the largest number
}


const arr = [1, 2, 3, 4, 15, 6, 7, 8, 9, 10];
const largestNumber = findLargest(arr);
console.log(`Largest number in the array: ${largestNumber}`); // Output the largest number
if(largestNumber > 0){
    console.log(`The largest number in the array is ${largestNumber}`);
} else{
    console.log("There are no numbers in the array");
}
// Note: The initial value of largest is set to arr[9] which assumes the array
// has at least 10 elements. If the array is shorter, this will cause an error.
// A better approach would be to initialize largest to the first element of the array.
// Also, the loop should iterate through the entire array to find the largest number.
// This code assumes the array is not empty and contains only numbers.
// If the array is empty, it should handle that case separately.
// Additionally, the code should check if the array is empty before trying to access its elements.