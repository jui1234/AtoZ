let combinationSum2 = function (candidates, target) {
    let ans = [];
    let subset = [];

    // Step 1: Sort
    candidates.sort((a, b) => a - b);

    let helper = function (index, sum) {

          if (sum === target) {
            ans.push([...subset]);
            return;
        }


        // Step 2: Stop if we reached the end
        if (index === candidates.length) {
            return;
        }

        

        // Step 3: Stop if sum is greater than target
        if (sum > target) {
            return;
        }

        // Step 4: Target reached
      
        // Step 5: Try every candidate from index
        for (let i = index; i < candidates.length; i++) {

            // Step 6: Skip duplicate numbers
            if (i > index && candidates[i] === candidates[i - 1]) {
                continue;
            }

            // Take
            subset.push(candidates[i]);

            helper(i + 1, sum + candidates[i]);

            // Backtrack
            subset.pop();
        }
    };

    helper(0, 0);

    return ans;
};

console.log(
    combinationSum2([2, 1, 2, 7, 6, 1, 5], 8)
);