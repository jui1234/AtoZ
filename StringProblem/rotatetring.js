let rotateString=function(s,goal){
    let map=new Map();

    for(let i=0;i<s.length;i++){
        map.set(s[i],(map.get(s[i])||0)+1);
    }
    console.log("map",map)

    for(let i=0;i<goal.length;i++){
        if(map.get(goal[i])>0){
          map.set(s[i],(map.get(s[i])-1))
        }
    }

    console.log("map after",map)


 let allZeros=[...map.values()].every(value=>value===0)
 
    return allZeros;
  


}
console.log("rotateString",rotateString("abcde","cdeab"))
console.log("rotateString",rotateString("abcde","adeac"))
console.log("rotateString",rotateString("abcde","abcde"))