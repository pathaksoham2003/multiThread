const { parentPort } = require('worker_threads');

// Receive messages from the main thread
parentPort.on('message', function (inputNumber) {
  console.log('Received input number:', inputNumber);

  // Perform the computation
  const result = computeSum(inputNumber);
  console.log('Computed result:', result);

  // Send the result back to the main thread
  parentPort.postMessage(result);
});

// Function to compute the sum of numbers from 1 to n
function computeSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
