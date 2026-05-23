let reverse=function(arr, n) {
  if(n===0)return[];
  return [arr[n-1], ...reverse(arr,n-1)]
}

console.log(reverse([1,2,3,4,5],5))