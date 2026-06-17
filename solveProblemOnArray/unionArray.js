let unionArray=function(nums1,nums2){
   for(let i=0;i<nums2.length;i++){
    let found=false;

    for(let j=0;j<nums1.length;j++){
        if(nums1[j]===nums2[i]){
            found=true;
            break;
        }
    }
    if(!found){
        nums1.push(nums2[i])
    }
          
   } 
    return nums1;
}

console.log("unionArray",unionArray([1,2,3,4],[3,4,5,6]))
console.log("unionArray",unionArray([3, 4, 6, 7, 9, 9],[1, 5, 7, 8, 8]))