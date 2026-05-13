var Pattern7 = function(n){
  let str="";
  
  for(let i=1;i<=n;i++){
    let str="";
    
    for(let j=1;j<=n-i;j++){
      str+="  ";
    }
    
    for(let k=1;k<=(i+i)-1;k++){
      str+=" *";
    }
   
    console.log(str);
  }
}

Pattern7(4);