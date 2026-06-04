let FrequencyOfchar = function(str){
  let map=new Map();
  
 for(ch of str){
   map.set(ch,(map.get(ch)||0)+1)
 }
 console.log("frequencyofstr",map)
}

FrequencyOfchar("test")