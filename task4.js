function test (n) {
    if (n%5===0 && n%3===0) {
         
        console.log ("n=" +n+ "->" + " FizzBuzz");
    }  
    else if (n%3===0) {         
    console.log ("n=" +n+ "->" + " Fizz");
    }
       
    else if (n%5===0) {       
    console.log ("n=" +n+ "->" + " Buzz");
    }
     
    else {
        console.log ("n=" +n+ "->" + n);
    }
 }
 test (7);
 test (10);
 test (9);
 test (45);