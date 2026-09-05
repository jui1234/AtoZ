let  generateParenthesis=function(n) {
    let Ans=[];
   function generate(str,open,close){

    if(str.length===n*2){
        Ans.push(str);
        return;
    }
    if(open<n){
        generate(str+'(',open+1,close);
    }
    if(close<open){
        generate(str+')',open,close+1);
    }
   }
   generate('',0,0);
  
 return Ans;
}
console.log("generateParenthesis",generateParenthesis(2))
console.log("generateParenthesis",generateParenthesis(3))
