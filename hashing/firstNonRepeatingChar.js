let nonRepeatingChar=function(str){
 let map=new Map();

 for(ch of str){
    map.set(ch,(map.get(ch)||0)+1)
    
 }
 for(ch of str){
    if(map.get(ch)===1){
        return ch;
    }
 }
 return null;
}

console.log("nonRepeatingChar",nonRepeatingChar("abababc"))
console.log("nonRepeatingChar",nonRepeatingChar("abbbc"))