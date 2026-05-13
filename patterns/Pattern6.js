var Pattern6 = function(n) {
 for(let i=n;i>=1;i--){
    let str="";
    for(let j=1;j<=i;j++){
        str+=j;
    }
    console.log(str);
 }
}

Pattern6(5);