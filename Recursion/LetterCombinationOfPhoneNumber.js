let letterCombinations=function(digits){
    let letter=["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
    let storeletter=[];
    let ans=[];
    // let combination="";
    for (let i = 0; i < digits.length; i++) {
        storeletter.push(letter[digits[i]])
}
   let helper=function(index,combination){
    if(index===storeletter.length){
        ans.push(combination);
        return;
    }

    let currentletter=storeletter[index];
    for(let i=0;i<currentletter.length;i++){
        helper(index+1,combination+currentletter[i])
    }


   }

   helper(0,"")
return ans;


}

console.log("letterCombinations",letterCombinations('27'))