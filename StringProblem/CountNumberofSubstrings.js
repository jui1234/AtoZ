let NumberofSubstrings=function(s,k){
  let count=0;

  for(let i=0;i<s.length;i++){
    let charcount=0;
    let map=new Map();

    for(let j=i;j<s.length;j++){
        if(!map.has(s[j])){
            charcount++;
        }

        map.set(s[j],map.get(s[j]||0)+1);

        if(charcount===k){
            count++;
        }

        if(charcount>k){
            break;
        }
    }
  }
  return count;
}

console.log("NumberofSubstrings",NumberofSubstrings("pqpqs",2))
console.log("NumberofSubstrings",NumberofSubstrings("abcbaa",3))