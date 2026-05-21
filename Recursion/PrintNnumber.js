let PrintNNumber=function(n){
    console.log(n);
    if(n===10){
        return;
    }
    PrintNNumber(n+1);
    n++;
}

    PrintNNumber(0);