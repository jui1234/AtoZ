let printNumbers=function(n){
     console.log(n);
     if(n===1){
       return;
     }
     printNumbers(n-1);
}

printNumbers(5);