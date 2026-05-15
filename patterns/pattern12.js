var pattern12 = function(n){
  for(let i=1;i<=n;i++){
    let str="";
    for(let j=1;j<=i;j++){
      str+=j;
    }
   for(let k = 1; k <= 2 * (n - i); k++){
      str+=" "
    }
    for(let k = i;k>=1;k--){
      str+=k;
    }
    console.log(str)
  }
}

pattern12(5);