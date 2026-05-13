var Pattern5 =function(n){
  for(let i=n;i>=1;i--){
    let str="";
    for(let j=i;j>=1;j--){
      str+="*";
    }
    console.log(str);
  }
}


Pattern5(5);
Pattern5(3);