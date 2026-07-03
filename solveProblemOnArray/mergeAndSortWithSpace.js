let mergeAndSort=function(nums1,m ,nums2,n){
      let result=[];
      result=[...nums1];
      for(let i=0;i<n;i++){
        result.push(nums2[i])
      }

    //   console.log("result",result)
      return result.sort((a,b)=>a-b);
}

console.log("mergeAndSort",mergeAndSort([1,2,3,4],4,[6,7,8,9,10],5))
console.log("mergeAndSort",mergeAndSort([-5, -2, 4, 5],4,[-3, 1, 8],3))