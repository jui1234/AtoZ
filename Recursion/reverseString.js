let reverse=function(s){
  if(s.length<=1)return s;
  let letter=s[0];
  reverse=reverse(s.slice(1))+letter;
  return reverse
}

console.log("reverse",reverse("RTH"))