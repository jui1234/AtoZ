function combinationSum2(candidates, target) {
    let ans = [];

    // 1. Sort the array
    candidates.sort((a, b) => a - b);

    function helper(index, sum, combination) {

        // 2. We found a valid combination
        if (sum === target) {
            ans.push([...combination]);
            return;
        }

        // 3. Stop if we reached the end
        // or the sum became bigger than target
        if (index === candidates.length || sum > target) {
            return;
        }

        // 4. Try every available number
        for (let i = index; i < candidates.length; i++) {

            // 5. Skip duplicate numbers
            // at the SAME recursion level
            if (i > index && candidates[i] === candidates[i - 1]) {
                continue;
            }

            // Since array is sorted,
            // if this number makes sum too big,
            // all numbers after it will also be too big
            if (sum + candidates[i] > target) {
                break;
            }

            // 6. Choose the number
            combination.push(candidates[i]);

            // 7. Move to i + 1
            // so the SAME element cannot be used again
            helper(i + 1, sum + candidates[i], combination);

            // 8. Remove the number
            // so we can try another possibility
            combination.pop();
        }
    }

    helper(0, 0, []);

    return ans;
}

let candidates = [2, 1, 2, 7, 6, 1, 5];
let target = 8;

console.log(combinationSum2(candidates, target));