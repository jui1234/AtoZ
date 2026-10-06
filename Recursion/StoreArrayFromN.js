let printinrecInArray=function(n){
  
    if(n===0){
        // arr.push(n)
        return [];
    }

    
    
    return [n,...printinrecInArray(n-1)];
}

console.log("printinrecInArray",printinrecInArray(5))