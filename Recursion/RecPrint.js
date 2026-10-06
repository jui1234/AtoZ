let printinrec=function(n){
    if(n===0){
        return;
    }

    printinrec(n-1);
    console.log(n);
}

console.log("printinrec",printinrec(5))