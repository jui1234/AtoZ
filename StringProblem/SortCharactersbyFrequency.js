let frequencySort=function(s){
    let map=new Map();
    for(let i=0;i<s.length;i++){
        map.set(s[i],(map.get(s[i])||0)+1);
    }

      let result = [...map.entries()]
        .sort((a, b) => {
            if (b[1] !== a[1]) {
                return b[1] - a[1];   // higher frequency first
            } else {
                return a[0].localeCompare(b[0]); // alphabetical order
            }
        })
        .map(([key]) => key);

    return result;

    // return sortArray;
}

console.log("frequencySort",frequencySort("tree"))
console.log("frequencySort",frequencySort("raaaajj"))
console.log("frequencySort",frequencySort("bbccddaaa"))