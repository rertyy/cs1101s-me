// merge k-sorted arrays -- list

//O(kn) time

function array_merge_sort(A) {
    function merge(A, low, mid, high) {
        const B = []; // temporary array
        let left = low;
        let right = mid + 1;
        let Bidx = 0;
        while (left <= mid && right <= high) {
            if (A[left] <= A[right]) {
                B[Bidx] = A[left];
                left = left + 1;
            } else {
                B[Bidx] = A[right];
                right = right + 1;
            }
            Bidx = Bidx + 1;
        }
        while (left <= mid) {
            B[Bidx] = A[left];
            Bidx = Bidx + 1;
            left = left + 1;
        }
        while (right <= high) {
            B[Bidx] = A[right];
            Bidx = Bidx + 1;
            right = right + 1;
        }
        for (let k = 0; k < high - low + 1; k = k + 1) {
            A[low + k] = B[k];
        }
    }
    function merge_sort_helper(A, low, high) {
        if (low < high) {
            // if we have at least 2 elements
            const mid = math_floor((low + high) / 2);
            merge_sort_helper(A, low, mid);
            merge_sort_helper(A, mid + 1, high);
            merge(A, low, mid, high);
        } else {
        }
    }
    merge_sort_helper(A, 0, array_length(A) - 1);
}

function array_append(a1, a2) {
    let A = [];
    const l1 = array_length(a1);
    const l2 = array_length(a2);
    for (let i = 0; i < l1; i = i + 1) {
        A[i] = a1[i];
    }
    for (let j = 0; j < l2; j = j + 1) {
        A[l1 + j] = a2[j];
    }
    return A;
}


function array_two_way_merge(arr1, arr2, output) {
    // display(arr2);
    if (is_undefined(arr2)) {
        return arr1;
    }
    const one_length = array_length(arr1);
    const two_length = array_length(arr2);
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < one_length && j < two_length) {
        if (arr1[i] < arr2[j]) {
            output[k] = arr1[i];
            i = i + 1;
        } else {
            output[k] = arr2[j];
            j = j + 1;
        }
        k = k + 1;
    }
    
    while (i < one_length) {
        output[k] = arr1[i];
        i = i + 1;
        k = k + 1;
    }
    while (j < two_length) {
        output[k] = arr2[j];
        i = i + 1;
        k = k + 1;
    }
}

function merge_k(arr){
    let output = [];
    let N = array_length(arr[0]);
    
    function merge_k_helper(arr, i, j, output) {
        if (i === j) {
            for (let p = 0; p < N; p = p + 1) {
                output[p] = arr[i][p];
            }
        }
        if (j - i === 1) {
            array_two_way_merge(arr[i], arr[j], output);
            // display(output);
        }
        
        let out1 = [];
        let out2 = [];
        
        merge_k_helper(arr, i, (i + j) / 2, out1);
        merge_k_helper(arr, (i + j) / 2 + 1, j, out2);
        array_two_way_merge(out1, out2, output);
    }
    
    merge_k_helper(arr, 0, N, output);
    return output;
}


const arr_arr = [[1,2,3,99],[4,5,6,10],[1,2,9,5]];
// array_two_way_merge(arr_arr[0], arr_arr[1]);
merge_k(arr_arr);


