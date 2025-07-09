// Create a function which left rotates the array by one  (in place)

let array = [3,4,5] //expected output -> [4,5,3]   

const leftRotateByOne = (array)=>{
    let temp = array[0]
    for(let i=1; i<array.length; i++){
        array[i-1] = array[i];
    }

    array[array.length -1] = temp;
    return array
}


console.log(leftRotateByOne(array))