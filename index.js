<meta charset="UTF-8"></meta>

function privet() {
    alert("Повідомлення просте");
    rezultat=confirm("Перевіримо, яку кнопку ви натиснули");
    if (rezultat==true){
        document.write("Ви натиснули кнопку ОК");
    } else {
        document.write("Ви натиснули кнопку ВІДМІНА");
    }
}