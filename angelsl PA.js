/*******************************************************************************/
/********************************* Q1 ******************************************/
/*******************************************************************************/



/*******************************************************************************/
                                /* Q1.1 */
/*******************************************************************************/
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
                                /* Q1.2 */
/*******************************************************************************/

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
/********************************* Q2 ******************************************/
/*******************************************************************************/



/*******************************************************************************/
                                /* Q2.1 */
/*******************************************************************************/

function is_divisible(x, y) {
    return x % y === 0;
}
function sieve(s) {
    return pair(head(s),
        () => sieve(stream_filter(
            x => !is_divisible(x, head(s)),
            stream_tail(s))));
}

// const a = sieve(stream(2,3,4,5,6,7,9,11,13,54));  //stream(1);
// eval_stream(a, 5);

/*******************************************************************************/
                                /* Q2.2 */
/*******************************************************************************/

function primes() {
    return sieve(integers_from(2));
}

// eval_stream(primes(), 10);


/*******************************************************************************/
                                /* Q2.3 */
/*******************************************************************************/

function stalin(s) {
    return pair(head(s),
        () => stalin(stream_filter(
            x => (x > head(s)),
            stream_tail(s))));
}

// const efg = stalin(stream(5, 4, 3, 2, 1));
// eval_stream(efg, 1);
// const ggg = stalin(stream(10, 1, 2, 3, 2, 5, 4, 7, 5));
// eval_stream(ggg, 1);




/*******************************************************************************/
/********************************* Q3 ******************************************/
/*******************************************************************************/




/*******************************************************************************/
                                /* Q3.1 */
/*******************************************************************************/


function map_new() {
    return [];
}

/*******************************************************************************/
                                /* Q3.2 */
/*******************************************************************************/

function map_get(map, key) {
    for (let i = 0; i < array_length(map); i = i + 1){
        if (map[i][0] === key) {
            return map[i][1];
        }
    }
    return null;
}

// map_get([[0, "Hello"], [1, "World"]], 0);

/*******************************************************************************/
                                /* Q3.3 */
/*******************************************************************************/

function map_set(map, key, value) {
    const len = array_length(map);
    let flag = true;
    for (let i = 0; i < array_length(map); i = i + 1){
        if (map[i][0] === key) {
            map[i][1] = value;
            flag = false;
        }
    }
    if (flag) {
        map[len] = [key, value];
    }
}

// let map = map_new();
// map_set(map, "Hello", 0);
// map;


// let map2 = [["Hello", 0], ["World", 1]];
// map_set(map2, "World", 20);
// map2;

/*******************************************************************************/
                                /* Q3.4 */
/*******************************************************************************/

function encapsulate(map) {
    return x => 
        {
            for (let i = 0; i < array_length(map); i = i + 1) {
                // display(map[i][1]);
                if (map[i][0] === x) {
                    // display(map[i][1]);
                    return map[i][1];
                }
            }
        };
}


encapsulate([[0, "Hello"], [1, "World"]])(1); // "World"
encapsulate([["Hello", 0], ["World", 1]])("");



/*******************************************************************************/
                                /* Q3.5 */
/*******************************************************************************/

function inherit(fobj, proto) {
    return encapsulate(fobj);
}

let proto = encapsulate([[0, "Hello"], [1, "World"]]);
let obj = encapsulate([[1, "Dlrow"]]);
inherit(obj, proto)(1);






















