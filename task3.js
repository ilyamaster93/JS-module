let x, y;
function test (x,y) {
    if (x<=y)
    console.log (`Ошибка! ${x} <= ${y}`);
    
    else {
    //console.log ("x="+x + " и " + "y="+y + " -> " + x%(y*2+x**y-y));
    console.log (`${x}=x и ${y}=y -> ${x%y*2+x**y-y}`);
    }
}
test (17,9);
test(7,4);
test(11,5);
test(3,2);