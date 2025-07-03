function squareStarPattern(n){
    if(n <=0) return "";
    for(let i=0; i<n; i++){
        let row = ""
        for(let j = 0; j<n; j++){
            row = row + "*"
        }
        console.log(row);
    }

    
}

function rightAngleStarPattern(n){
    if(n<=0) return ""

    for(let i =0; i<n; i++){
        let row =""
        for(let j = 0; j<=i; j++){
            row = row + "*"
        }
        console.log(row);
    }
}

function numberPattern(n){
    if(n<=0) return ""

    for(let i =0; i<n; i++){
        let row =""
        for(let j = 0; j<=i; j++){
            row = row + (j+1)
        }
        console.log(row);
    }
}



function numberPattern(n){
    if(n<=0) return ""

    for(let i =0; i<n; i++){
        let row =""
        for(let j = 0; j<=i; j++){
            row = row + (j+1)
        }
        console.log(row);
    }
}


function numberPattern2(n){
    if(n<=0) return ""

    for(let i =0; i<n; i++){
        let row =""
        for(let j = 0; j<=i; j++){
            if( j % 2 === 0) {
                row = row + "0"
            } else  {
                row = row + 1
            }
        }
        console.log(row);
    }
}


function reverseStarPattern(n){
    for(let i=0; i<n; i++){
        let row = ""
        for(let j=0; j<=n; j++){
            if(n-i <= j){
                row = row + "*"
            } else {
                row = row + " "
            }
        }

        console.log(row);
    }
}

// Example print
// 1 (i =0, j =0, n-i = 4, n-j =4)
// 01 (n-i = 3, n-j = 4, n-j = 3, i = 1, j = 0, j = 1)
// 010 (n-i = 2, n-j = 4, n-j = 3, n-j = 2, i = 2, j = 0, j = 1, j = 2)
// 1010 (n-i = 1, n-j = 4, n-j = 3, n-j = 2, n-j = 1, i = 3, j = 0, j = 1, j = 2, j = 3)


// 10101
// 010101
// 1010101

// Understand this pattern and try to print it by alt method

function altNumberPattern1(n){
    let start = 1;
    for(let i =0; i<n; i++){
        let row  = ""
        for(let j=0; j<=i; j++){
            row  = row + start;
            start = start === 1 ? 0 : 1; // Toggle between 0
        }

        console.log(row);
    }
}

squareStarPattern(4)
rightAngleStarPattern(4)
numberPattern(5)
numberPattern2(4)
reverseStarPattern(4)
altNumberPattern1(6)
