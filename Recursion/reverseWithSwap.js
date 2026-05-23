let reverse = function(arr, n) {
    function helper(left, right) {
        if (left >= right) return;

        // swap
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        helper(left + 1, right - 1);
    }

    helper(0, n - 1);
}

let arr = [1,2,3,4,5];

reverse(arr, 5);

console.log(arr);