//task 2.1
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }
  fib(6);

//task 2.2

//task 2.3
  function delElement (n, m) {
    var array = ["Газета", "Журнал", "Книга", "Учебник", "Листовка"]
    console.log ("Массив после удаления и сдвига элементов: " +"'" + array.splice(n, m)+"'");
    }
    delElement(0,2);

//task 2.4
  function getIndex (n) {
    var array = ["Газета", "Журнал", "Книга", "Учебник", "Листовка"]
    
    console.log ("'" +array.indexOf(n)+"'" + " - индекс искомого элемента '" + n + "'" );
    }
    getIndex("Газета");


