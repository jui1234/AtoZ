let removeChar=function(str,char){
  if(str.length===0) return "";
  if(str[0]===char){
    return removeChar(str.slice(1),char)
  }
 return str[0]+removeChar(str.slice(1),char);
  
}

console.log("removeChar",removeChar("banana","a"))