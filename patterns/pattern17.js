var patter17=function(n){
  for(let i=0;i<n;i++){
    let str="";
    let chatcount=65;
     for(let j=i;j<n-1;j++){
       str+="  ";
  }
  for(let j=0;j<=i;j++){
    str+=String.fromCharCode(chatcount)+" ";
    chatcount++;
  }
  chatcount=65+i-1;
  for(let j=0;j<i;j++){
      str+=String.fromCharCode(chatcount)+" ";
      chatcount--;
  }
  

  
  console.log(str);
  }
 
}
patter17(5);