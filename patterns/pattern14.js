var patter14=function(n){
for(let i=1;i<=n;i++){
  let strcount=65;
  let str="";
  for(let j=1;j<=i;j++){
    str+=String.fromCharCode(strcount)+" ";
    strcount++;
  }
  console.log(str)
}
}

patter14(4);