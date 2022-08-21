// https://web.programming-hero.com/web-6/video/web-6-21-9-advanced-create-a-fibonacci-series-using-a-for-loop
// const fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21];
// fibo[3] = fibo[2] + fibo[1]
// fibo[4] = fibo[3] + fibo[2]
// fibo[5] = fibo[4] + fibo[3]
const fibo = [0, 1];
for (i = 2; i <= 10; i++) {
   fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);