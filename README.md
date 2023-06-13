# Multi-Threading Optimization
This code demonstrates the usage of multi-threading to optimize CPU utilization on a system with 2 cores. It consists of two files, main.js and worker.js, which work together to perform a computation in parallel using multiple threads.

## Usage
To run the code, follow these steps:

1. Install Node.js on your system if it's not already installed.
2. Clone the repository or download the code files OR Fork the repository if you want to play around the code.
   To Clone use :- 
 ```git
 git clone https://github.com/pathaksoham2003/multiThread.git
 ```
   To Fork :- 
   1. Click on Fork button in the top and get it forked to your profile.
   2. Use the forked repository to clone.
      ```git
      git clone https://github.com/YOURUSERID/multiThread.git
      ```
3. Open a terminal or command prompt and navigate to the project directory.
4. Execute the code by running the command: `node main.js`.

## Description
The code spawns a worker thread using the worker_threads module in Node.js. The worker thread is responsible for performing a computation in parallel with the main thread. Here's an overview of how the code works:

1. The `main.js` file creates a new worker instance using the `Worker` class from the `worker_threads` module.
2. A message event listener is attached to the worker instance to receive messages from the worker thread.
3. The main thread sends a message to the worker thread using `worker.postMessage(inputNumber)`.
4. The worker thread receives the message using the `parentPort.on('message', ...)` event listener.
5. The worker thread performs the computation, which in this case is summing numbers from 1 to `inputNumber`.
6. The computed result is sent back to the main thread using `parentPort.postMessage(result)`.
7. The main thread receives the result through the message event listener and logs it to the console.

## Computation Details
The computation being performed in both the main thread and the worker thread is the sum of numbers from 1 to inputNumber. The function computeSum(n) is used in both files to calculate the sum using a simple loop.

```javascript
function computeSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
```
## Optimization
By using multi-threading, this code takes advantage of the system's two cores to perform the computation in parallel. The main thread and the worker thread work concurrently, allowing for better utilization of the CPU resources.

## Result
The code outputs the computed result to the console. Additionally, it measures and logs the time taken for the computation to complete in both the main thread and the worker thread. The time is logged using the console.log function.
Please note that the execution time may vary depending on the system's specifications and workload. This code is for a dual core system.

## License
This code is provided under the MIT License. Feel free to modify and use it according to your needs.
