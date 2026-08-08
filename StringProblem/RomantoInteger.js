let romanToInt=function(s){
    let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

let romannumbr=0;

for(let i=0;i<s.length;i++){
    if(roman[s[i]]<roman[s[i+1]]){
        romannumbr-=roman[s[i]];
    }
    else{
         romannumbr+=roman[s[i]];
    }
}
return romannumbr;
}

console.log("romanToInt",romanToInt( "III"))
console.log("romanToInt",romanToInt( "XLII"))
console.log("romanToInt",romanToInt( "DCCCXC"))
