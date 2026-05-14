var patter8 = function(n){
 
  
for(let i=n;i>0;i--){
  // console.log("i",i)
  let str="";
  for(let j=0;j<=n-i-1;j++){
    // console.log("i",i)
    str+=" "
    // console.log("j",j)
  }
  for(let k=1;k<=i+i-1;k++){
    str+="*"
    // console.log("K",k)
  }
  console.log(">",str)
}
}

patter8(4)