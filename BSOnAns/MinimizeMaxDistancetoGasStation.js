let minimiseMaxDistance=function(arr,k){
    let low=0;
    let maxgap=0;
    for(let i=0;i<arr.length-1;i++){
     maxgap=Math.max(maxgap,arr[i+1]-arr[i]);
    }
    let high=maxgap;
   

    while (high - low > 1e-6) {
        let mid=(low+high)/2;
        let GasStationneede=0;

        for(let i=0;i<arr.length-1;i++){
           let gap = arr[i+1] - arr[i];
           if(gap>mid){
            GasStationneede+=Math.ceil(gap/mid)-1;
           }
        }
     

        if(GasStationneede>k){
            low=mid;
        }
        else{
           
            high=mid;
        }
    }
    return high;
}

console.log("minimiseMaxDistance",minimiseMaxDistance([1, 2, 3, 4, 5, 6 ,7, 8, 9, 10],10))
console.log("minimiseMaxDistance",minimiseMaxDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],1))