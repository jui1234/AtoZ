let reverseWords=function(s){
    let word="";
    let words=[];

    for(let char of s){
        if(char!==" "){
            word+=char;
        }
        else
        if(word!==""){
           words.push(word);
           word="";
        }
    }
    if(word!==""){
        words.push(word)
    }
    return words.reverse().join(" ");
}

console.log("reverseWords",reverseWords("Hello jui"))