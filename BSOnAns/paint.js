let paint=function(A,B,C){
    let low=Math.max(...C);
    let high=C.reduce((sum,cur)=>sum+cur);
    let ans=-1;

    while(low<=high){
        let total=0;
        let mid=Math.floor((low+high)/2);
        let painter=1;

        for(let i=0;i<C.length;i++){
            total+=C[i];
            if(total>mid){
                painter++;
                total=C[i];
            }
        }

        if(painter>A){
            low=mid+1;
        }
        else{
            ans=mid;
            high=mid-1;
        }

    }

    return ans*B;
}
console.log("paint",paint(2,5,[1,10]))
console.log("paint",paint(10,1,[1,8,11,3]))
console.log("paint",paint(3,2,[5,10,30,20]))
