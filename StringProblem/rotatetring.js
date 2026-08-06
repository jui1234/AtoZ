let rotateString=function(s,goal){
    let i=0;

   while(i<s.length){
    let storefirst=s.charAt(0);
    let storelast=s.slice(1);
       s=storelast+storefirst;
    if(s===goal){
        return true;
    }
    i++;
   

}
return false;
}
console.log("rotateString",rotateString("abcde","cdeab"))
console.log("rotateString",rotateString("abcde","adeac"))
console.log("rotateString",rotateString("abcde","abcde"))