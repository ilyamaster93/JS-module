function test (month) {
    if (month>12 || month <1) {
        console.log ("Error")
        return;
    }
    else if (month<3 || month===12){
        console.log ("Зима")
    }
    else if (month<6){
        console.log ("Весна")
    }
    else if (month<9){
        console.log ("Лето")
    }
    else {
        console.log ("Осень")
    }
    }
    test (1);
    test (4);
    test (8);
    test (10);