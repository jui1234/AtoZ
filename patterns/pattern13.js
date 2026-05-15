var pattern13=function(n){
    let count=1;
  for(let i=1;i<=n;i++){
    let str="";
   
    for(let j=1;j<=i;j++){
   
      str+=count+" ";
      count++;
     
    }
      
    console.log(str);
  }
}

pattern13(5);