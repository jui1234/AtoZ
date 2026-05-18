let pattern21 = function(n){

    for(let i = 1; i <= n; i++){

        let str = "";

        for(let j = 1; j <= n; j++){

            if(i === 1 || i === n){
                str += "*";
            }
            else if(j === 1 || j === n){
                str += "*";
            }
            else{
                str += " ";
            }
        }

        console.log(str);
    }
}

pattern21(5);