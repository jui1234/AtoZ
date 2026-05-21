var printNumbersRec=function(n){
  if (n === 0) return;
  printNumbersRec(n-1);
  console.log(n);
  
}

printNumbersRec(5);