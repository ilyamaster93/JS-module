
function test (n) {
    let sum=0;
    for (let i=0; i<=n; i++) {
        sum = sum + i;
    }
    alert ("сумма ряда чисел Фибоначчи включительно до значения n= " +n+  " равна" + sum);
}
test(3);
test(11);