let longestCommonPrefix=function(str){
    if( str.length===0)
    {
        return "";
    }


    let prefix=str[0];
    for(let i=1;i<str.length;i++){
    let j=0
    while(
        j<str[i].length && j<prefix.length && prefix[j]===str[i][j]
    ){
        j++;
    }
    prefix=prefix.substring(0,j);
    if(prefix==="")return "";
    }
    return prefix;
}

console.log("longestCommonPrefix",longestCommonPrefix([ "flowers", "flow", "fly", "flight" ]))
console.log("longestCommonPrefix",longestCommonPrefix(["dog" , "cat" , "animal", "monkey" ]))
console.log("longestCommonPrefix",longestCommonPrefix([ "lady", "lazy" ]))