const generateBinaryStrings=function(n){
    let Ans=[];

    function generate(str){
       if(str.length===n){
             Ans.push(str);
             return; 
       }

       generate(str+'0');

       if(str.length===0 || str.charAt(str.length-1)==='0' ){
        generate(str+'1');
       }

    }
       generate('')
    return Ans;
}

console.log("generateBinaryStrings",generateBinaryStrings(3))
console.log("generateBinaryStrings",generateBinaryStrings(2))