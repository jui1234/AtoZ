let CountVowels= function(str){
  isVowels="aeiou";
  let count=0;
  if(str.length===0)return 0;
  if(isVowels.includes(str[str.length-1])){
    count++;
  }
  return count+CountVowels(str.slice(0,str.length-1))
}

console.log("CountVowels",CountVowels("hello"))