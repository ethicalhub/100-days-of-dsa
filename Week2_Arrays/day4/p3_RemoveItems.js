let array = [1, 2, 3, 4, 5, 6, 7, 5, 3, 8, 9, 3, 10];


const removeItemFromSpecificIndex= (array, position)=>{
     if (position < 0 || position > array.length) {
        console.log("Invalid position");
        return -1;
    }    

    for(let i = position; i<array.length; i++){
        array[i] = array[i+1];
    }
    array.length = array.length - 1;
    console.log(array)
    return array;
}

// removeItemFromSpecificIndex(array, 3)

const removeFirstOccurence = (array, element)=>{
    for(let i=0; i<array.length; i++){
        if(array[i] === element){
            for(let j=i; j<array.length; j++){
                array[j] = array[j+1]; 
            }
           array.length = array.length - 1;
           return array;
        }
    }

    console.log("No occurence of given element found")
    return -1;
}

// removeFirstOccurence(array, 5)
// Time Complexity: O(n), the first loop run from 0 to i, and the second loop run from i to n
// Space Compleixty : O(1)

const removeAllOccurences = (array, element)=>{
    console.log(array)
    for(let i =0; i<array.length; i++){
        if(array[i] === element){
            for(let j = i; j<array.length; j++){
                array[j] = array[j+1]
            }

            array.length = array.length - 1;
             i--; //recheck the same index if the next element would be same
        }
    }
    console.log(array)

    return array
}

removeAllOccurences(array, 3)