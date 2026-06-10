let mergeSort=function(nums){

    if(nums.length<=1){
        return nums;
    }
    let mid=Math.floor(nums.length/2);
    let left = mergeSort(nums.slice(0, mid));
    let right = mergeSort(nums.slice(mid));

    return merge(left,right);
}

let merge=function(left,right){
    let i=0;
    let j=0;
    let result=[];
      while (i < left.length && j < right.length) {
        if(left[i]<right[j]){
           result.push(left[i])
           i++;
        }
        else{
            result.push(right[j])
            j++;
        }
    }
    while(i<left.length){
        result.push(left[i])
        i++;
    }
    while(j<right.length){
        result.push(right[j])
        j++;
    }

    return result;
    
}

console.log("mergeSort",mergeSort([8, 3, 5, 4, 7, 6, 1, 2]))

