let pattern22 = function(n) {

    let size = 2 * n - 1;

    for(let i = 0; i < size; i++) {

        let str = "";

        for(let j = 0; j < size; j++) {

            let top = i;
            let left = j;
            let right = size - 1 - j;
            let bottom = size - 1 - i;

            let minDistance = Math.min(top, left, right, bottom);

            str += (n - minDistance) + " ";
            // console.log("minDistance",minDistance,"str",str)
        }

        console.log(str);
    }
}

pattern22(5);