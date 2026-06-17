let unionArray=function(nums1,nums2){
 return [...new Set([...nums1,...nums2])];    
}

console.log("unionArray",unionArray([1,2,3],[3,4,5,6]))