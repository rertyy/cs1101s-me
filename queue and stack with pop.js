// let queue = []; //FIFO
// const SIZE = 5;

// let head = 0; //FIFO
// let tail = 0; //LILO

// function enqueue(x) {
//     let len = array_length(queue);
//     if (len < 5) {
//         queue[len] = x;
//         tail = len;
//         head = 0;
//     } else {
//         queue[head] = x;
//         head = head > SIZE - 2 ? 0 : head + 1;
//         tail = tail > SIZE - 2 ? 0 : tail + 1;
//     }
// }


// function dequeue(){
//     queue[tail] = undefined;
//     head = head > SIZE - 2 ? 0 : head + 1;
//     tail = tail > SIZE - 2 ? 0 : tail + 1;
// }

// function peek(){
//     return queue[head];
// }

// queue;


//Stack is just opposite of queue in head - 1;
let stack = []; //FILO
const SIZE = 5;
let head = 0;
let tail = 0;

function push(x) {
    let len = array_length(stack);
    if (len < 5) {
        stack[len] = x;
        tail = len;
        head = 0;
    } else {
        stack[head] = x;
        head = head - 1 < 0 ? SIZE - 1 : head - 1; //you can also tail = (tail+1) % size;
        tail = tail - 1 < 0 ? SIZE - 1 : tail - 1;
    }
}

function pop(){
    stack[tail] = undefined;
    head = head - 1 < 0 ? SIZE - 1 : head - 1;
    tail = tail - 1 < 0 ? SIZE - 1 : tail - 1;
}

function peek_stack(){
    return stack[head];
}
