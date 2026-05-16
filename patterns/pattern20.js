var pattern20=function(n){
  for(let i=1;i<=n;i++){
    let str="";
    for(let j=1;j<=i;j++){
      str+="*";
    }
    for(let j=1;j<=n-i;j++){
      str+=" ";
    }
    for(let j=1;j<=n-i;j++){
      str+=" ";
    }
     for(let j=1;j<=i;j++){
      str+="*";
    }
    console.log(str);
  }
  
  for(let i=n-1;i>=1;i--){
    let str="";
    for(let j=1;j<=i;j++){
      str+="*";
    }
    for(let j=i;j<n;j++){
      str+=" "
    }
    for(let j=i;j<n;j++){
      str+=" "
    }
      for(let j=1;j<=i;j++){
      str+="*";
    }
    console.log(str);
  }
}

pattern20(5);