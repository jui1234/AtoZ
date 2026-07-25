let CountDays=function(weights,capacity){
    let day=1;
    let currentload=0;

    for(let i=0;i<weights.length;i++){
        if(currentload+weights[i]<=capacity){
            currentload+=weights[i];
        }
        else{
            day++;
            currentload=weights[i];
        }
    }
    return day;
}
let shipWithinDays=function(weights,days){
    let low=Math.max(...weights);
    let high = weights.reduce((sum, weight) => sum + weight, 0);
    let ans=high;

    while(low<=high){
        let mid=Math.floor((low+high)/2);

        let daysneeded=CountDays(weights,mid);

        if(daysneeded<=days){
            ans=mid;
            high=mid-1;
        }
        else{
            low=mid+1;
        }
    }
   
    return ans;
}

console.log("shipWithinDays",shipWithinDays([1,2,3,4,5,6,7,8,9,10],5))