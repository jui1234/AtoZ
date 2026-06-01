let Target=function(arr,target){
if (arr.length===0)return 0;
  let count=0;
  if(arr[arr.length-1]===target){
    count++;
  }
  
  return count+Target(arr.slice(0,arr.length-1),target);
}

console.log(Target([1,2,3,2,3,1,1,2,2],2));