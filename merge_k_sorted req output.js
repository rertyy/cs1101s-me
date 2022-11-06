//Merge a matrix of k sorted arrays into a single sorted list
//copied from https://www.geeksforgeeks.org/merge-k-sorted-arrays/
function merge_two_arrays(arr1, arr2, arr3) {
    let i = 0;
    let j = 0;
    let k = 0;
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
}
 
function merge_k_sorted_arrays(arr, i, j, output) {
    if (i === j) { //if only 1 array, add to output
        for (let p = 0; p < array_length(arr[i]); p = p + 1) {
            output[p] = arr[i][p];
        }
        return true; //to end function
    }
    if (j - i === 1) { //if 2 arrays, merge them
        merge_two_arrays(arr[i], arr[j], output);
        return true; //to end function
    }
    let out1 = []; //temp arrays to wishful thinking
    let out2 = [];
    merge_k_sorted_arrays(arr, i, math_floor((i + j) / 2), out1); //i and j are array numbers
    merge_k_sorted_arrays(arr, math_floor((i + j) / 2) + 1, j, out2);
    merge_two_arrays(out1, out2, output); // Merge the output array
}

function merge_k_helper(arr) {
    let output = [];
    merge_k_sorted_arrays(arr, 0, array_length(arr) - 1, output);
    return output;
}

//TEST
let arr = [ [ 2, 6, 12, 13, 15],
            [ 1, 9, 20, 1000 ],
            [ 23, 34, 90, 2000 ],
            [999] ];

merge_k_helper(arr);
