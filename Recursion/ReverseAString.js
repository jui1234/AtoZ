let ReverseString=function(str){
  let store="";
  if(str.length===0)return store;
  
  store=str[str.length-1];
  return store+ReverseString(str.slice(0,str.length-1))
  
}

console.log(ReverseString("jui"))