let FrequencyOfArray=function(arr){
    let map=new Map();
    for(nums of arr){
      map.set(nums,(map.get(nums)||0)+1);
    }
    console.log("map",map)
}

FrequencyOfArray([1,2,1,2,3,4,5,4])