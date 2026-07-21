let  roseGarden=function(n, nums, k, m) {
 if(k*m>n){
    return -1;
 }

 let low=Math.min(...nums);
 let high=Math.max(...nums);
 let ans=-1;


 while(low<=high){
 let mid=Math.floor((low+high)/2);
 let count=0;
 let bouquets=0;

 for(let i=0;i<nums.length;i++){
    if(nums[i]<=mid){
        count++;

        if(count===k){
            bouquets++;
            count=0;
        }
    }
    else{
        count=0;
    }
 }

 if(bouquets>=m){
    ans=mid;
    high=mid-1;
 }
 else{
    low=mid+1;
 }
 }
 return ans;
}

console.log("roseGarden",roseGarden(8,[7, 7, 7, 7, 13, 11, 12, 7],3,2))
console.log("roseGarden",roseGarden(5, [1, 10, 3, 10, 2],2,3))
console.log("roseGarden",roseGarden(5, [1, 10, 3, 10, 2],1,3))