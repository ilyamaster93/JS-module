let x, y;
function test (x,y) {
    if (x<=y)
    alert ("Ошибка!" + x + "<=" + y);
    
    else {
    alert ("x="+x + " и " + "y="+y + " -> " + x%(y*2+x**y-y));
    }
}
test (17,9);
test(7,4);
test(11,5);
test(3,2);