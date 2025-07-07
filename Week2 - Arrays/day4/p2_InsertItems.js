// 1. Insert items at specific index in an array
// 2. Insert items at the last

let array = [1, 2, 3, 4, 5, 6, 7, 8];


const insertElementAtSpecificIndex = (array, element, position)=>{
   if (position < 0 || position > array.length) {
        console.log("Invalid position");
        return -1;
    }    

    for(let i = array.length-1; i >= position;i--){
        array[i+1] = array[i]  
    }
    array[position] = element;
    
    // let array = 

    console.log(array)
    return array
}

insertElementAtSpecificIndex(array, 5, 6)
// array.splice(position, 0, element);
// array.splice(start, deleteCount, item)

const insertElementAtLastIndex = (array, element)=>{
    // can use js push method to add index on the last element;
    return array[array.length] = element;
}

const updateElementAtSpecificIndex= (array, element, position) => {
    return array[position] = element;
}