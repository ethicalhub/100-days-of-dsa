function searchElement(arr, element){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === element){
            return i; // Return the index of the element if found
        }
    }

    return -1;
}


const arr = [1, 2, 3, 4, 5];
const element = 4;
const index = searchElement(arr, element);
console.log(index)
if(index !== -1){
    console.log(`Element ${element} found at index ${index}`);
}
else{
    console.log(`Element ${element} not found in the array`);
}       