function makeCounter(n){
    let count = n;

    return{
        increase: function() {
            count += 1;
        },
        decrease: function() {
            count -= 1;
        },
        get: function() {
            return count;
        }
    }
}

let counter = makeCounter(7);