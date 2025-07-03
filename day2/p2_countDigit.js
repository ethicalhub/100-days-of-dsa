function countDigit(num){
    let newNum = Math.abs(num);
    let count = 0;

    if(newNum === 0) {  
        console.log(1);
        return;
    }

    for(let i = newNum; i>0; i= Math.floor(i/10)){
        count++;
    }
   
    console.log(count);

}



countDigit(123) // Expected output: 3
countDigit(0)   // Expected output: 1
countDigit(-456) // Expected output: 3