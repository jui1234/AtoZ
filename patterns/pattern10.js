var pattern10 = function(n){
  for(let i=1;i<=n;i++){
    let str="";
    
    for(let j=1;j<=i;j++){
      str+="*";
    }
    
    console.log(str);
  }
  for(let i=n;i>=1;i--){
    let str="";
    for(let j=1;j<=i;j++){
      // console.log(j)
      str+="*";
    }
    console.log(str);
  }
}

pattern10(5);