function merge_two_lists(xs, ys) {
    if (is_null(xs)) {
        return ys;
    } else if (is_null(ys)) {
        return xs;
    } else if (head(xs) < head(ys)) {
        return pair(head(xs), merge_two_lists(tail(xs), ys));
    } else {
        return pair(head(ys), merge_two_lists(xs, tail(ys)));
    }
}

function merge_k_sorted_lists(xs, i, j) {
    if (i === j) {
        return list_ref(xs, i);
    }
    if (j - i === 1) { //if 2 arrays, merge them
        return merge_two_lists(
            list_ref(xs, i),
            list_ref(xs, j));
    }
    
    const out1 = merge_k_sorted_lists(xs, i, math_floor((i + j) / 2)); //i and j are array numbers
    const out2 = merge_k_sorted_lists(xs, math_floor((i + j) / 2) + 1, j);
    return merge_two_lists(out1, out2); // Merge the output array
}

function merge_k_helper(xs) {
    return merge_k_sorted_lists(xs, 0, length(xs) - 1);
}

//TEST
// let lstlst = list(
//                 list(1,2,3,10),
//                 list(4,5,11,55),
//                 list(9,13));
// merge_k_helper(lstlst);
// test 200