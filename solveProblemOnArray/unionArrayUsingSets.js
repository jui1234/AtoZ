let unionArray=function(nums1,nums2){
 return [...new Set([...nums1,...nums2])].sort();    
}

console.log("unionArray",unionArray([1,2,3],[3,4,5,6]))
console.log("unionArray",unionArray([3, 4, 6, 7, 9, 9],[1, 5, 7, 8, 8]))       