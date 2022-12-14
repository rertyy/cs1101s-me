function permutations(s) {
return is_null(s)
? list(null)
: accumulate(append, null,
map(x => map(p => pair(x, p),
permutations(remove(x, s))),
s));
}

function bracket_builder(n) {
    return n === 0
        ? null
        : append(list(0, 1), bracket_builder(n -1));
}

function check_brackets(lst) {
    let open_bracket = 0;
    let i = 0;
    //open bracket displayed as 0, close bracket displayed as 1
    
    while (true) {
        // display(list_ref(lst, i));
        if (list_ref(lst, i) === 0) {
            open_bracket = open_bracket + s1;
        } else if (list_ref(lst, i) === 1) {
            open_bracket = open_bracket - 1;
        }
        if (open_bracket < 0) {
            return false;
        }
        if (i === length(lst) - 1) {
            break;
        }
        i = i + 1;
    }
    return open_bracket === 0;
}

function accum_remove_duplicates(xs) {
return is_null(xs)
    ? null
    : pair(head(xs),
        accum_remove_duplicates(
            filter(x => !equal(x, head(xs)) , tail(xs))));
}


function enumerate_parentheses(n) {
    const perms = permutations(bracket_builder(n));
    const a = filter(x => check_brackets(x) === true, perms);
    const b = accum_remove_duplicates(a);
    display(b);
    return length(b);
    
}
//aasd asd as d
// tests cases
//testing testing
// enumerate_parentheses(2); // returns 2
enumerate_parentheses(3); 
// enumerate_parentheses(7); // returns 429
//testhusti jsji i
//test 3335
//testijs oi\sjiaio sno o
//ajsd