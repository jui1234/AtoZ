let reversefun=function(s){
  if(s.length<=1)return s;
  let letter=s[0];
  reverse=reversefun(s.slice(1))+letter;
  return reverse
}

let palindrome = function(s){
  let reverse=reversefun(s);
  
  if(s===reverse){
    return true;
  }
  return false;
}
console.log("palindrome",palindrome("FAF"))
console.log("palindrome",palindrome("hannah"))
console.log("palindrome",palindrome("aabbaA"))