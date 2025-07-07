function countNegatives(arr){
    let count  = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] < 0){
            count++;
        }
    }
    return count; // Return the count of negative numbers
}

const arr = [1, 2, 3, 4, 5, 6];
const negativeCount = countNegatives(arr);
console.log(`Count of negative numbers: ${negativeCount}`); // Output the count of negative numbers
if(negativeCount > 0){
    console.log(`There are ${negativeCount} negative numbers in the array`);
} else{
    console.log("There are no negative numbers in the array");
}