function find_digital_encode(n) {
    if (n < 10) {
        return n;
    } else {
        let i = 0;
        let sum = 0;
        const num_str = stringify(n);
        while (true) {
            const val = char_at(num_str, i);
            display(val);
            i = i + 1;
            if (is_undefined(val)) {
                break;
            } else {
                sum = sum + parse_int(val, 10);
                display(sum,"a");
            }
        }
        return find_digital_encode(sum);
    }
}

/****************************************************************************/
/****************************************************************************/
/****************************************************************************/

/* //trying to account for non-strictly increasing is nlogn time
function peak(xs) {
    let max = 0;
    function check(xs, low, high) {
        if (high - low <= 1) {
            max = math_max(xs[low], xs[high], max);
        } else {
            const mid = math_floor((low + high) / 2);
            check(xs, mid + 1, high);
            check(xs, low, mid);
        }
        return max;
    }
    
    
    const len = array_length(xs);
    if (len === 0) {
        return null;
    } else if (len === 1) {
        return xs[0];
    } else {
        return check(xs, 0, len - 1);
    }
    
    
}

const xs0 = [1,3,6,4,2];
const xs1 = [1,1,1,3,1];
const xs2 = [1,1,1,1,2];
const xs3 = [2,1,1,1,1];
const xs4 = [1,5,1,1,1];
peak(xs0);
*/

function peak(xs) {
    function check(x, low, high) {
        if (low >= high - 1) {
            return math_max(x[low], x[high]);
        }
        
        const mid = math_floor((low + high) / 2);
        if (x[mid - 1] < x[mid] && x[mid] > x[mid + 1]) {
            return x[mid];
        } else if (x[mid - 1] < x[mid]) {
            return check(x, mid, high);
        } else {
            return check(x, low, mid);
        }
    }
    
    const len = array_length(xs);
    if (len === 0) {
        return null;
    } else if (len === 1) {
        return xs[0];
    } else {
        return check(xs, 0, len - 1);
    }
}

// const xs = [1, 3, 6, 4, 2]; //, then peak(xs) returns 6
// const xs = [1, 2, 4, 6, 9]; //, then peak(xs) returns 9
// const xs = [5, 4, 3, 2, 1]; //, then peak(xs) returns 5
// peak(xs);



/****************************************************************************/
/****************************************************************************/
/****************************************************************************/

function add(s1, s2) {
    function add_single(x, carry) {
        if (is_null(x)) {
            return null;
        }
        const sum = head(x) + carry;
        const new_digit = sum % 10;
        const new_carry = (sum - new_digit) / 10;
        return pair(new_digit, () => add_single(stream_tail(x), new_carry));
    }
    
    function add_helper(x, y, carry) {
        if (is_null(x) && is_null(y)) {
            return (carry === 0) ? null : pair(carry, () => null);
        } else {
            const xdigit = (is_null(x)) ? 0 : head(x);
            const ydigit = (is_null(y)) ? 0 : head(y);
            const sum = xdigit + ydigit + carry;
            const new_digit = sum % 10;
            const new_carry = (sum - new_digit) / 10;
            
            return pair(new_digit,
                        () => add_helper((is_null(x)) ? x : stream_tail(x),
                            (is_null(y)) ? y : stream_tail(y), new_carry));
        }
    }
    return add_helper(s1, s2, 0);
}

// const a = add(stream(9, 9), stream(9, 9));
// eval_stream(a, 3);
// stream_ref(a, 3);


/****************************************************************************/
/****************************************************************************/
/****************************************************************************/

//Multiply


/****************************************************************************/
/****************************************************************************/
/****************************************************************************/

function source_reshape(matrix, r, c) {
    const ret = [];
    for (let i = 0; i < r; i = i + 1) {
        ret[i] = [];
    }
    
    //flat matrix is easier to use by appending whole matrix into flat_mat
    let flat_matrix = [];
    let counter = 0;
    const rows = array_length(matrix);
    const cols = array_length(matrix[0]);
    for (let i = 0; i < rows; i = i + 1) {
        for (let j = 0; j < cols; j = j + 1) {
            flat_matrix[counter] = matrix[i][j];
            counter = counter + 1;
        }
    }
    
    let i = 0;
    let j = 0;
    let m = 0;
    let n = 0;
    while (i < r) {
        while (j < c) {
            ret[i][j] = matrix[m][n];
            display(ret);
            if (n + 1 === cols) {
                m = m + 1;
                n = 0;
            } else {
                n = n + 1;
            } 
            j = j + 1;
        }
        j = 0;
        i = i + 1;
    }
            
    return ret;
}

// const matrix = [[1,3,6],[2,4,8]];
// source_reshape(matrix, 6, 1);

/****************************************************************************/
/****************************************************************************/
/****************************************************************************/




function get_next_state(current) {
    const rows = array_length(current);
    const cols = array_length(current[0]);
    
    const temp = []; //arr that stores state of neighbours
    for (let i = 0; i < rows; i = i + 1) {
        temp[i] = [];
    }
    
    function neighbour_checker(i, j) {
        if (i < 0 || i >= rows || j < 0 || j >= cols) {
            return 0;
        } else {
            return current[i][j];
        }
    }
    
    for (let i = 0; i < rows; i = i + 1) {
        for (let j = 0; j < cols; j = j + 1) {
            let sum = 0;
            for (let y = -1; y <= 1; y = y + 1) {
                for (let x = -1; x <= 1; x = x + 1) {
                    if (y === x && y === 0) { //centre
                        continue;
                    }
                    sum = sum + neighbour_checker(i + y, j + x);
                    
                }
            }
            temp[i][j] = sum;
            
            
            // temp[i][j] = 
            //     neighbour_checker(i-1, j-1) + //bottom left
            //     neighbour_checker(i,   j-1) + //bottom
            //     neighbour_checker(i+1, j-1) + //top right
            //     neighbour_checker(i-1, j  ) + //left
            //     // neighbour_checker(i  , j  ) + //centre
            //     neighbour_checker(i+1, j  ) + //bottom left
            //     neighbour_checker(i-1, j+1) +
            //     neighbour_checker(i,   j+1) +
            //     neighbour_checker(i+1, j+1);
                
        }
    }
    
    display(temp);
    
    //map no. neighbours back to next_state
    for (let i = 0; i < rows; i = i + 1) {
        for (let j = 0; j < cols; j = j + 1) {
            if (current[i][j] === 1) {
                current[i][j] = temp[i][j] < 2 //underpop
                            ? 0
                            : temp[i][j] === 2 || temp[i][j] === 3
                            ? 1
                            : 0; // temp[i][j] > 3;
            } else if (current[i][j] === 0 && temp[i][j] === 3) {
                current[i][j] = 1;
            }
        }
    }
    
    return current;
}


const current_state = [[1,1,0],
                       [0,1,1],
                       [1,0,0]];
                       
get_next_state(current_state);






