//task 2.1
function fib(n) {  
  var sum = 0
      ,i
      ,str
      ,arr = []
  ;

  for(i=0; i<n; i++) {
      if(arr.length > 1)  sum += arr[ arr.length-2];
      if(arr.length == 1) sum = 1;
      if(arr.length == 0) sum = 0;

      arr.push( sum);
  }

  str = arr.join(", "); 
  console.log(str);
  }

fib(4); 

//task 2.2

let numbers = [ 1, 2, 3, 4, 5, 6];

let sum =0; 

function square() {
sum++;
};
numbers.forEach(square);
console.log (`Длина массива numbers: ${sum}`);

//task 2.3
function delElement (n) {
  let array = ["Газета", "Журнал", "Книга", "Учебник", "Листовка"];
console.log (`Массив до удаления и сдвига элементов: ${array}`);
    delete array[n];
    for (let i=n; i<array.length; i++) {
      array[i]=array[i+1];
 }
  console.log (`Массив после удаления и сдвига элементов: ${array}`);
  }
  delElement(2);

//task 2.4
function getIndex (element) {
  var array = ["Газета", "Журнал", "Книга", "Учебник", "Листовка"];
  for (let i=0; i<array.length; i++) {
     if (array[i]===element){
     console.log (`Индекс искомого элемента ${i}`);
    }
  }
  }
  getIndex("Газета");


