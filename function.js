function computeSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
}
const currentTime = new Date();
const iniTime = currentTime.getSeconds();
console.log(computeSum(10000000000));
const current = new Date();
const finalTime = current.getSeconds();
console.log(finalTime-iniTime);