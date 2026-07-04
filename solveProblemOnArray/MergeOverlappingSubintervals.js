let mergeOverlap = function(intervals){//[5,7],[1,3],[4,6],[8,10]]
    intervals.sort((a,b)=>a[0]-b[0])//sort it by 1st number like 5,1,4,8
    //after sort [[1,3],[4,6],[5,7],[8,10]]
    let result=[intervals[0]];//[[1,3]]

    for(let i=1;i<intervals.length;i++){
        let current=intervals[i];//[4,6]
        let last=intervals[result.length-1];//[1,3]

        if(current[0]<=last[1]){
            last[1]=Math.max(current[1],last[1])
        }
        else{

        result.push(current);
        }

    }
    return result;
}

console.log("mergeOverlap",mergeOverlap([[1,5],[3,6],[8,10],[15,18]]))
console.log("mergeOverlap",mergeOverlap([[5,7],[1,3],[4,6],[8,10]]))
// console.log("mergeOverlap",mergeOverlap())