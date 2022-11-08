function naivePadovan(n) {
    if (n < 3) {
        return 1;
    } else {
        return naivePadovan(n - 2) + naivePadovan(n - 3);
    }
}



function iterPadovan(n) {
    function helper(a, b, c, n) {
        return n === 0 
               ? a
               : helper(b, c, a + b, n - 1);
    }
    
    return helper(1, 1, 1, n);
}



function loopPadovan(n) {
    let a = 1;
    let b = 1;
    let c = 1;
    for (let i = 0; i < n; i = i + 1) {
        const temp = a + b;
        a = b;
        b = c;
        c = temp;
    }
    
    return a;
}



function memPadovan(n) {
    const mem = [];
    
    function helper(n) {
        if (n < 3) {
            return 1;
        } else if (mem[n] !== undefined) {
            return mem[n];
        } else {
            const result = memPadovan(n - 2) + memPadovan(n - 3);
            mem[n] = result;
            return result;
        }
    }
    return helper(n);
}



function memo_fun(fun) {
    let already_run = false;
    let result = undefined;
    
    function mfun() {
        if (!already_run) {
            result = fun();
            already_run = true;
            return result;
        } else {
            return result;
        }
    }
    return mfun;
}

function padStream() {
    function genPad(a,b,c) {
        return pair(a, memo_fun(() => genPad(b, c, a + b)));
    }
    return genPad(1,1,1);
}



function isPadovanNum(n) {
    function helper(start, end) {
        if (start > end) {
            return false;
        } else {
            const mid = math_floor((start + end) / 2);
            const check = memPadovan(mid);
            return n === check
                   ? true
                   : n > check
                   ? helper(mid + 1, end)
                   : helper(start, mid - 1);
        }
    }
    return helper(0, n + 2);
}


function createSequence(f, xs) {
    const len = length(xs);
    const mem = [];
    function helper(n) {
        if (mem[n] !== undefined) {
            return mem[n];
        } else if (n < len) {
            return list_ref(xs, n);
        } else {
            const result = f(helper, n);
            mem[n] = result;
            return result;
        }
    }
    return helper;
}

const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const fibo = n => n === 0 ? 0 : n === 1 ? 1 : fibo(n - 1) + fibo(n - 2);


const padovan = createSequence(
    (f, n) => f(n - 2) + f(n - 3), list(1, 1, 1)
);
// padovan(8); // returns 7


function combineSequences(xs, comb) {
    let functions = xs;
    
    function helper(n) {
        if (is_null(tail(functions))) {
            return head(functions)(n);
        } else {
            const func = head(functions);
            functions = tail(functions);
            return comb(func(n), helper(n));
        }
    }
    
    return helper;
}

function combineSequences1(xs, comb) {
    return accumulate(comb, head(xs), tail(xs));
}

const factorialPlusFibo = combineSequences1(
		list(factorial, fibo),
		(f, g) => (x => (f(x) + g(x)))
);
// factorialPlusFibo(5);

// // mulSeq = padovan(n) * fibo(n) * fact(n)
// const mulSeq = combineSequences(
// 		list(padovanNumbers, fibo, factorial),
// 		(f, g) => ???
// );
// mulSeq(5); // Returns 1800

// compose = fibo(padovan(n))
const compose = combineSequences(
		list(fibo, padovan),
		(f, g) => x => f(g(x))
);
// compose(13); // Returns 317811



