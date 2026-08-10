let beautySum=function(s){
    let beautysum=0;
    for(let i=0;i<s.length;i++){
        let map=new Map();
       
        for(let j=i;j<s.length;j++){
            map.set(s[j],(map.get(s[j])||0)+1)
             let minvalue=Infinity;
        let maxvalue=-Infinity;

         for(value of map.values()){
            minvalue=Math.min(minvalue,value);
            maxvalue=Math.max(maxvalue,value);

        }

        beautysum+=(maxvalue-minvalue);

        }

       
        
    }
    return beautysum;
}

console.log('beautySum',beautySum("xyx"))
console.log('beautySum',beautySum("aabcbaa"))