function computeSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
}
const currentTime = new Date();
const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();
const milliseconds = currentTime.getMilliseconds();
console.log(`Task Started : Current time: ${hours}:${minutes}:${seconds}.${milliseconds}`);
console.log(computeSum(10000000000));
console.log(computeSum(10000000000));
const currentTime1 = new Date();
const hours1 = currentTime1.getHours();
const minutes1 = currentTime1.getMinutes();
const seconds1 = currentTime1.getSeconds();
const milliseconds1 = currentTime1.getMilliseconds();
console.log(`Task Ended : Current time: ${hours1}:${minutes1}:${seconds1}.${milliseconds1}`);
