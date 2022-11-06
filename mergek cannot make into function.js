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
 
// This function takes an array of arrays
// as an argument and all arrays are assumed
// to be sorted. It merges them together
// and prints the final sorted output.
function mergeKArrays(arr, i, j, output) {
    // If one array is in range
    if (i === j) {
        for (let p = 0; p < array_length(arr[i]); p = p + 1) {
            output[p] = arr[i][p];
        }
        return true;
    }
    // If only two arrays are left
    // them merge them
    if (j - i === 1) {
        merge_two_arrays(arr[i], arr[j], output);
        return true;
    }
     
    // Output arrays
    let out1 = [];
    let out2 = [];
     
    // Divide the array into halves
    mergeKArrays(arr, i, math_floor((i + j) / 2), out1);
    mergeKArrays(arr, math_floor((i + j) / 2) + 1, j, out2);
     
    // Merge the output array
    merge_two_arrays(out1, out2, output);
}
 
// Driver code
 
// Change n at the top to change number
// of elements in an array
let arr = [ [ 2, 6, 12, 13, 15],
            [ 1, 9, 20, 1000 ],
            [ 23, 34, 90, 2000 ],
            [999] ];
            // [1,2] ];
let output = [];

// function merge_k_helper(arr) {
//     let output = [];
//     // display(arr);
//     mergeKArrays(arr, 0, array_length(arr), output);
    
//     return output;
// }
// mergeArrays(arr[0], arr[1], output);

mergeKArrays(arr, 0, 3, output);


output;