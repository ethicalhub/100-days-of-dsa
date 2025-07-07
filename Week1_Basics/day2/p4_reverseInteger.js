// https://leetcode.com/problems/reverse-integer/description/

var reverse = function(x) {
    let originalX = x;
    let reverse = 0;

    x= Math.abs(x)

    while(x>0){
        reverse = reverse * 10 + (x%10)
        x = Math.floor(x/10)
    }

    let limit = Math.pow(2,31)
    if(reverse < -limit || reverse > limit-1) return 0;

    return originalX < 0 ? -reverse : reverse
};