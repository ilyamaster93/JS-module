function test (month) {
    switch (month) {
        case 1: 
        case 2:
        case 12:
            
            alert ("month=" +month+ "->" + "Зима");
        
            break;
        
        case 3: 
        case 4:
        case 5:
            
            alert ("month=" +month+ "->" +"Весна");
        
            break;
        
        case 6: 
        case 7:
        case 8:
            
            alert ("month=" +month+ "->" + "Лето");
        
            break;
        
        case 9: 
        case 10:
        case 11:
            
            alert ("month=" +month+ "->" + "Осень");
        
            break;
        
        default: 
           
            alert ("month=" +month+ "->" + "Ошибка");
     
    }
    }
    test (1);
    test (4);
    test (8);
    test (10);