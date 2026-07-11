let searchInARotatedSortedArrayII=function(nums,k){
    for(let i=0;i<nums.length;i++){
        if(nums[i]===k){
            return true;
        }
    }
    return false;
}

console.log("searchInARotatedSortedArrayII",searchInARotatedSortedArrayII([4, 5, 6, 7, 0, 1, 2],0))
console.log("searchInARotatedSortedArrayII",searchInARotatedSortedArrayII([4, 5, 6, 7, 0, 1, 2],3))
console.log("searchInARotatedSortedArrayII",searchInARotatedSortedArrayII([4, 5, 6, 7, 0, 1, 2],5))