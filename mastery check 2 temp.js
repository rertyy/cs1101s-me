

function fib(n) {
    return n <= 1
        ? 0
        : n === 2
        ? 1
        : fib(n-1) + fib(n-2);
}

fib(10);

let mem = [];
function read(n) {
    return mem[n];
}
function write(n, stored) {
    mem[n] = stored;
}

function mfib(n) {
    if (!is_undefined(read(n))) {
        return read(n);
    } else {
        const store = n <= 1
                    ? 0
                    : n === 2
                    ? 1
                    : mfib(n-1) + mfib(n-2);
        write(n, store);
        return store;
    }        
}

// fib(90); O(2^n) time, theta(phi^n) time
mfib(90); // theta(n) time to write the values, make the array






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





const int = pair(1, memo_fun(() => ms("B", integers_from(2))));

function ms(m, s) {
    display(m);
    return s;
}

eval_stream(int, 2);
eval_stream(int, 2);
display("/*****************/");


function m_integers_from(n) {
    return pair(n,
            memo_fun(
                () => ms("M: " + stringify(n),
                m_integers_from(n + 1))));
}
const m_integers = m_integers_from(1);
eval_stream(m_integers_from(10), 5);
eval_stream(m_integers_from(10), 5);
display("/*******/");
eval_stream(m_integers, 4);
eval_stream(m_integers, 8);

