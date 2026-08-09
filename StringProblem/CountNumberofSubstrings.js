let NumberofSubstrings=function(s,k){
    let charcount=0;
    let count=0;
    for(let i=0;i<s.length;i++){
    let map=new Map();
        let str="";
        for(let m=0;m<=k+i;m++){
            if(map.has(s[m]) && charcount<k){
              count++;
              str+=s[m];
              map.set(s[m],map.get(s[m]||0)+1)
              charcount++;
            }
            else if(charcount>k){
                break;
            }
        }
        for(let j=i+k;j<s.length;j++){
             if(map.has(s[j]) && charcount<k){
                count++;
              str+=s[j];
              map.set(s[j],map.get(s[j]||0)+1)
              charcount++;
            }
            else if (charcount>k){
                break;
            }
        }
    }
    return count;
}

console.log("NumberofSubstrings",NumberofSubstrings("pqpqs",2))
console.log("NumberofSubstrings",NumberofSubstrings("abcbaa",3))