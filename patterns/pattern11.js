var pattern11 = function(n){
  for(let i=1;i<=n;i++){
    let str="";
    let num;
    if(i%2===0){
      num=1;
    }
    else{
      num=0;
    }
    for(let j=1;j<=i;j++){
       num=1-num;
       str+=num;
        if(j !== i) {
                    str += " ";
                }
    }
    console.log(str)
  }
}

pattern11(5);

