const mem = [];
function mchoose(n, k) {
    function read(n, k) {
        return mem[n] === undefined ? undefined : mem[n][k];
    }
    function write(n, k, value) {
        if (mem[n] === undefined) {
            mem[n] = [];
        } else {
        }
        mem[n][k] = value;
    }
    if (read(n, k) !== undefined) {
        return read(n, k);
    } else {
        const result =
            k > n
                ? 0
                : k === 0 || k === n
                ? 1
                : mchoose(n - 1, k) + mchoose(n - 1, k - 1);
        write(n, k, result);
        return result;
    }
}


function pascal_stream(n) {
    function helper(n, r) {
        return r > n
            ? null
            : pair(
                mchoose(n, r),
                () => helper(n, r + 1));
    }
    return helper(n, 0);
}


const a = pascal_stream(5);
stream_to_list(a);


function naive_pascal(row) {
    if (row === 0) {
        return [1];
    }
    let previous = [1];
    for (let r = 1; r <= row; r = r + 1) {
        const next = [];
        next[0] = 1;
        for (let i = 1; i < r; i = i + 1){
            next[i] = previous[i-1] + previous[i];
        }
        next[r] = 1;
        display(previous);
        previous = next;
    }
    return previous;
}


function array_to_list(A) {
    const len = array_length(A);
    let L = null;
    for (let i = len - 1; i >= 0; i = i - 1) {
        L = pair(A[i], L);
    }
    return L;
}
