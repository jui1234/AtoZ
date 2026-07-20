let minimumRateToEatBananas=function(nums,h){
    let low=1;
    let high=Math.max(...nums);

    while(low<=high){

    let total=0;
        let mid=Math.floor((low+high)/2);

        for(let i=0;i<nums.length;i++){

        total+=Math.ceil(nums[i]/mid);
        }

        if(total<=h){
        
            high=mid-1;
        }
        else{
       
            low=mid+1;

        }

    }

    return low;
}

console.log("minimumRateToEatBananas",minimumRateToEatBananas([7,15,6,3],8))
console.log("minimumRateToEatBananas",minimumRateToEatBananas([3,7,6,11],8))
console.log("minimumRateToEatBananas",minimumRateToEatBananas( [25, 12, 8, 14, 19],5))