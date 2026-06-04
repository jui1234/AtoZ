let mostFrequentElement = function(arr){
  let map=new Map();
  let maxcount=0;
  let maxkey=0;
  
  for(nums of arr){
    map.set(nums,(map.get(nums)||0)+1);
    if(map.get(nums)>=maxcount){
      maxcount=map.get(nums);
      maxkey=nums;
    }
  }
  
  return maxkey;
}

console.log("mostFrequentElement",mostFrequentElement([1,2,3,3,2,3,4,3,2,2,2]))
console.log("mostFrequentElement",mostFrequentElement([1,2,3,3,2,3,4,3,2,2,2,4,4,4,4,4,4]))