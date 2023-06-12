const { Worker } = require('worker_threads');

// Create a new worker instance
const worker = new Worker('./worker.js');
const currentTime = new Date();
// Receive messages from the worker
worker.on('message', function (result) {
  console.log('Result:', result);
  const current = new Date();
  const finalTime = current.getSeconds();
console.log(finalTime);
});

// Start the computation by sending a message to the worker
const inputNumber = 10000000000;
const iniTime = currentTime.getSeconds();
console.log(iniTime);
worker.postMessage(inputNumber);

function computeSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
}
computeSum(inputNumber);