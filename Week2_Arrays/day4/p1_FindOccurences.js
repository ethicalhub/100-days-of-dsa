let array = [1, 2,3, 3, 4, 5, 6, 7,5,3,8, 9,3, 10];

const findFirstOccurence = (array, element) =>{
    for(let i=0; i<array.length; i++){
        if(array[i] === element){
            console.log(i)
            return i;
        }
    }

    console.log(-1)
    return -1;
  
}

findFirstOccurence(array, 13)
findFirstOccurence(array, 5)
// JS builtin method: array.indexOf(element)
// TimeComplexity: O(n) we iterate n times in the worst case scenario
// SpaceComplexity: O(1) because we're not using any extra space by creating any new array,etc


const findAllOccurences = (array, element) =>{
    let allIndexes = []
    for(let i=0; i<array.length; i++){
        if(array[i]===element){
            allIndexes.push(i)
        }
    }

    console.log(allIndexes.length > 0 ? allIndexes : -1)
    return allIndexes.length > 0 ? allIndexes : -1

}

findAllOccurences(array, 3)
findAllOccurences(array, 13)

// JS builtin method:  
// const allIndexes = array
// .map((val, idx) => val === element ? idx : -1)
// .filter(idx => idx !== -1);


// TimeComplexity: O(n) we iterate n times in the worst case scenario
// SpaceComplexity: O(k) k is the number of times the element appears in that array



// Remove a number from an array