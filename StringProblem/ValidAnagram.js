let anagramStrings=function(s,t){
    let map=new Map();

    for(let i=0;i<s.length;i++){
        map.set(s[i],(map.get(s[i])||0)+1);
    }
    console.log("map",map)

    for(let i=0;i<t.length;i++){
        if(map.get(t[i])>0){
          map.set(t[i],(map.get(t[i])-1))
        }
    }

        console.log("map after",map)


 let allZeros=[...map.values()].every(value=>value===0)
 
    return allZeros;
  


}
console.log("anagramStrings",anagramStrings("anagram","nagaram"))
console.log("anagramStrings",anagramStrings("dog","cat"))
console.log("anagramStrings",anagramStrings("eat","tea"))