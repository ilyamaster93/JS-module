function delAndShift (n, m) {
    var array = ["Газета", "Журнал", "Книга", "Учебник", "Листовка"]
    console.log ("Массив после удаления и сдвига элементов: " +"'" + array.splice(n, m)+"'");
    }
    delAndShift(0,2);