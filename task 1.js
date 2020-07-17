function test (a) {
    if (a<=0) {
        
        alert ("a=" +a+ "->" + "Верно");
    }
    else {
        
        alert ("a=" +a+ "->" + "Неверно");
    }
}
test (1);
test (0);
test ('0');
test (-1);