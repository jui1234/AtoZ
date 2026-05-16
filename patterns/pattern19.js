var pattern19=function(n){
  for(let i=n;i>=1;i--){
    let str="";
    for(let j=0;j<i;j++){
      str+="*";
    }
    for(let k=0;k<n-i;k++){
      str+=" ";
    }
    for(let k=0;k<n-i;k++){
      str+=" ";
    }
    for(let k=0;k<i;k++){
      str+="*";
    }
    console.log(str);
  }
  for(let i=0;i<n;i++){
    let str="";
    for(let j=0;j<=i;j++){
      str+="*";
    }
    for(let j=n-1;j>i;j--){
      str+=" "
    }
    for(let j=n-1;j>i;j--){
      str+=" "
    }
    for(let j=0;j<=i;j++){
      str+="*";
    }
    console.log(str)
  }
}

pattern19(5);