var num = 4268,
    sum = 0;
while (num) {
    sum =sum + num % 10;
    num = Math.floor(num / 10);
}
console.log('sum of the number is',sum);