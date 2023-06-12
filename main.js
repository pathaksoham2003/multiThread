const { Worker } = require('worker_threads');

const inputNumber = 10000000000;
// Create a new worker instance
const worker = new Worker('./worker.js');
const currentTime = new Date();
// Receive messages from the worker
worker.on('message', function (result) {
  console.log('Result:', result);
  const currentTime = new Date();
const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();
const milliseconds = currentTime.getMilliseconds();

console.log(`Task Ended : Current time: ${hours}:${minutes}:${seconds}.${milliseconds}`);
});

// Start the computation by sending a message to the worker

const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();
const milliseconds = currentTime.getMilliseconds();

console.log(`Task Started : Current time: ${hours}:${minutes}:${seconds}.${milliseconds}`);
worker.postMessage(inputNumber);

function computeSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
}
computeSum(inputNumber);