let isomorphicString=function(s,t){
    if(s.length!==t.length)return false;
    let map=new Map();
    for(let i=0;i<s.length;i++){
        if(map.has(s[i])){
           if(map.get(s[i])!==t[i]){
             return false;
        }
        }
        else{
            map.set(s[i],t[i])
        }
        }
      
    
    return true;
}


console.log("isomorphicString",isomorphicString('egg','add'))
console.log("isomorphicString",isomorphicString('apple','bbnbm'))
console.log("isomorphicString",isomorphicString('paper','title'))