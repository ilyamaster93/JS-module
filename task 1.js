function test (a) {
  if (typeof a==='number') {

  if (a<=0) {
        console.log (`a=${a} -> Верно`);
      }  
    
    else {
        console.log (`a=${a} -> Неверно`);
      }
  }
  else {
    console.log (`a=${a} -> Неверно`);
  }
} 
  test (1);
  test (0);
  test ('0');
  test (-1);