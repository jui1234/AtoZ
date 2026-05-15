var patter15=function(n){
for(let i=n;i>=1;i--){
  let strcount=65;
  let str="";
  for(let j=1;j<=i;j++){
    str+=String.fromCharCode(strcount)+" ";
    strcount++;
  }
  console.log(str)
}
}

patter15(5);