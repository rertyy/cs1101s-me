/*******************************************************************************/
/*******************************************************************************/
/*******************************************************************************/
/* Q1.1 */
function flipped_pairs(xs, ys) {
    const xlength = length(xs);
    const ylength = length(ys);
    let counter = 0;
    // for (let i = 0; i < length(xs); i = i + 1) {
    //     const add = length(
    //                 filter(
    //                     x => list_ref(xs, i) > x,
    //                     ys));
    //     counter = counter + add;
    // }
    // return counter;
    
    
    function check_flip(num) {
        const fil_list = filter(
                            x => num > x,
                            ys);
        display(fil_list);
        return length(fil_list);
    }
    
    return accumulate((x,y) => check_flip(x) + y, 0, xs);
    
    
}

// flipped_pairs(list(1, 4, 3), list(5, 2));
// flipped_pairs(list(5,2), list(4, 1,2,3,4));



/*******************************************************************************/
/*******************************************************************************/
/*******************************************************************************/
/* Q1.2 */

function inversions(xs) {
    let counter = 0;
    
    function check_flip(num, ys) {
        const fil_list = filter(
                            x => num > x,
                            ys);
        display(fil_list);
        return length(fil_list);
    }

    
    function helper(xs) {
        if (is_null(xs)) {
            return 0;
        }
        const ys = xs;
        counter = counter + check_flip(head(xs), ys);
        return helper(tail(xs));
    }
    
    helper(xs);
    return counter;
}


// inversions(list(3, 2, 4, 1)); // 4
// inversions(list(1, 4, 3, 5, 2)); //4


/*******************************************************************************/
/*******************************************************************************/
/*******************************************************************************/
/* Q1.2 */



function is_divisible(x, y) {
    return x % y === 0;
}
function sieve(s) {
    return pair(head(s),
        () => sieve(stream_filter(
            x => !is_divisible(x, head(s)),
            stream_tail(s))));
}

sieve(stream(1,2,3,4,5));  //stream(1);










