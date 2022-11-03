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
    
    
    function f(num) {
        const fil_list = filter(
                            x => num > x,
                            ys);
        display(fil_list);
        return length(fil_list);
    }
    
    return accumulate((x,y) => f(x) + y, 0, xs);
    
    
}

// flipped_pairs(list(1, 4, 3), list(5, 2));
// flipped_pairs(list(5,2), list(4, 1,2,3,4));



/*******************************************************************************/
/*******************************************************************************/
/*******************************************************************************/
/* Q1.2 */

