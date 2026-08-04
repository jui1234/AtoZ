let reverseWords=function(s){
    let words=[];
    let word="";

    for(char of s){

        if(char!==" "){
          word+=char;
        }
        else{
            if(word!==""){
                words.push(word);
                word="";
            }
        }
    }
           if(word!==""){
          words.push(word);

    }


return words.reverse().join(" ");

}

console.log('reverseWords',reverseWords(" jui yezarkar"))