let myAtoi=function(input){
    let sign=1;
    let CN=0;

    for(let i=0;i<input.length;i++){
        if(input[i]==="-"){
            sign=-1;
        }
        if(input[i]>='0' &&  input[i]<='9'){
        CN=CN*10+Number(input[i]);
        }
    }
    return sign*CN;
}

console.log("myAtoi",myAtoi("-12345"))
console.log("myAtoi",myAtoi("4193 with words"))