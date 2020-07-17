function test (n) {
    if (n%5==0 && n%3==0) {
         
         alert ("n=" +n+ "->" + " FizzBuzz");
     }  
   else if (n%3==0) {
         
         alert ("n=" +n+ "->" + " Fizz");
     }
     
  
   else if (n%5==0) {
         
         alert ("n=" +n+ "->" + " Buzz");
     }
     
     else {
         alert ("n=" +n+ "->" + n);
     }
 }
 test (7);
 test (10);
 test (9);
 test (45);