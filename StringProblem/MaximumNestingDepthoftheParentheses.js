let maxDepth=function(s){
    let count=0;
    let maxcount=0;

    for(let i=0;i<s.length;i++){
        if(s[i]==='('){
            count++;
        }
        else if(s[i]===')'){
            maxcount=Math.max(count,maxcount);
            count--;
        }

        
       
        }
        return maxcount;
    }

    console.log("maxDepth",maxDepth("(1+(2*3)+((8)/4))+1"))
    console.log("maxDepth",maxDepth("(1)+((2))+(((3)))"))
    console.log("maxDepth",maxDepth("()(())((()()))"))
    console.log("maxDepth",maxDepth("((1+2)+3)"))
