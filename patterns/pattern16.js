var patter16=function(n){
  let strcount=65;
for(let i=1;i<=n;i++){
  let str="";
  for(let j=1;j<=i;j++){
    str+=String.fromCharCode(strcount)+" ";
  }
    strcount++;
  console.log(str)
}
}

patter16(4);