let FrequencyOfchar = function(str){
  let map=new Map();
  // let repchar="";
  
  
 for(ch of str){
   map.set(ch,(map.get(ch)||0)+1)
   if(map.get(ch)>1){
     return ch;
   }
 }
 return null;
 console.log("frequencyofstr",map)
}

console.log(FrequencyOfchar("etestee"));
console.log(FrequencyOfchar("testee"));