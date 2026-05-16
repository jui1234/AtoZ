var pattern18 = function(n){
  for(let i=1;i<=n;i++){
    let str="";
    let charcode=65;
      charcode=charcode+n-i;
      // console.log("charcode",charcode)
    for(let j=1;j<=i;j++){
      // console.log("charcode",charcode)
      str+=String.fromCharCode(charcode)+" ";
      charcode++;
    }
    console.log(str);
  }
}

pattern18(5);