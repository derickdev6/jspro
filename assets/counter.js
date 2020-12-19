// count in line 4 is private and cant be changed from consonle, only with increase and decrease funnctions in the make counter function and return object

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