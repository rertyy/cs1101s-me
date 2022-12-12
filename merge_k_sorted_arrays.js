//Merge a matrix of k sorted arrays into a single sorted list
//adapted from https://www.geeksforgeeks.org/merge-k-sorted-arrays/
function merge_two_arrays(arr1, arr2) {
    let i = 0;
    let j = 0;
    let k = 0;
    let arr3 = [];
    const N1 = array_length(arr1);
    const N2 = array_length(arr2);
    while (i < N1 && j < N2) {
        if (arr1[i] < arr2[j]) {
            arr3[k] = arr1[i];
            i = i + 1;
        } else {
            arr3[k] = arr2[j];
            j = j + 1;
        }
        k = k + 1;
    }
    while (i < N1) {
        arr3[k] = arr1[i];
        k = k + 1; 
        i = i + 1;
    }
    while (j < N2) {
        arr3[k] = arr2[j];
        k = k + 1;
        j = j + 1;
    }
    return arr3;
}
 
function merge_k_sorted_arrays(arr) { 
    function merge_k_helper(arr, i, j) {
        if (i === j) { //if only 1 array, add to output
            return arr[i];
            }
        if (j - i === 1) { //if 2 arrays, merge them
            return merge_two_arrays(arr[i], arr[j]);
        }
        const out1 = merge_k_helper(arr, i, math_floor((i + j) / 2)); //i and j are array numbers
        const out2 = merge_k_helper(arr, math_floor((i + j) / 2) + 1, j);
        return merge_two_arrays(out1, out2); // Merge the output array
    }

    return merge_k_helper(arr, 0, array_length(arr) - 1);
}

//TEST
// let arr = [ [ 2, 6, 12, 13, 15],
//             [3, 999] ];
// merge_k_sorted_arrays(arr);
// test github push 2
// test push 3