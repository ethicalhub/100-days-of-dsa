// Keep one copy of the element and remove duplicates from a sorted array
let array = [10,20,20,30,30,30,30]
// expected output - [10,20,30,4]
 


// Sol1: work both for sorted and unsorted arrays
// TC = O(n^2)
// SC = O(n)
const removeDuplicates = (array)=>{
    let newArray = []

    for(let i=0; i<array.length; i++){
        let isDuplicate = false;
        for(let j=0; j<newArray.length; j++){
            if(array[i] === newArray[j]){
                isDuplicate = true;
                break;
            }
        }

        if(!isDuplicate){
            newArray[newArray.length] = array[i]
        }
    }

   
    return newArray;
}


// Sol2: only for sorted arrays
// TC = O(n)
// SC = O(n)
const removeDuplicates2 = (array)=>{
    if(array.length === 0) return [];
    let newArray = [array[0]];

    for(let i=1; i<array.length; i++){
        if(array[i] !== newArray[newArray.length - 1]){
            newArray[newArray.length] = array[i]
        }
    }
   
   
    return newArray;
}


// Sol3: only for sorted arrays
// TC = O(n)
// SC = O(1)
const removeDuplicates3 = (array)=>{
    if(array.length === 0) return [];

    let res = 1;

    for(let i=1; i<array.length; i++){
        if(array[i] !== array[res -1 ]){
            array[res] = array[i];
            res++;
        }
    }
    console.log(array)

    return res;
}


// console.log(removeDuplicates(array))
// console.log(removeDuplicates2(array))
console.log(removeDuplicates3(array))