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


squareStarPattern(4)
rightAngleStarPattern(4)
numberPattern(5)
numberPattern2(4)
reverseStarPattern(4)