let IfArrayIsSorted=function(arr){
  
  if(arr.length<=1 )return true;
  
   return arr[arr.length-2]<arr[arr.length-1] && IfArrayIsSorted(arr.slice(0,arr.length-1))
}

console.log(IfArrayIsSorted([1,2,3,4,5]))
console.log(IfArrayIsSorted([1,6,2,3,4,5]))