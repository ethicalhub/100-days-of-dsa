function isPalindrome(x) {
    if(x<0) return false

    let reverseNum = 0;

    for(let i = x; i>0; i=Math.floor(i/10)){
        reverseNum = reverseNum * 10 + (i % 10);
    }
    if(reverseNum === x){
        return true;
    } 
    return false;


// Solution 2 -  converting it into string 
//    let reverseX = x.toString().split("").reverse().join("")
//    if(x == reverseX){
//     return true;
//    }
//    return false
 
};

isPalindrome(121)



// Brute Force (Solution 1) - reversing the number
// This solution is not efficient for large numbers, but it works for small inputs.

    // let originalX = x;  
    // let count = 0
    // let reverseNum = 0
    // for(let i=x; x>0; x=Math.floor(x/10)){
    //     count++;
    // }

    // x = originalX; 
    // for(let j=count; j>0; j--){
    //     reverseNum = reverseNum + ((originalX%10) * Math.pow(10, j-1));
    //     originalX = Math.floor(originalX/10);
    // }

    // if(reverseNum === x){
    //     console.log(true)
    // } else {
    //     console.log(false)
    // }