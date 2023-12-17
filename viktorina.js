let point = 0;
let answer = "";
answer = prompt("Какую птицу называют лесным доктором?");
if (answer == "дятел"){
    alert("Верно");
    point = point + 1; // сокращенная запись point++
}else{
    alert("Неверно!");
}

answer = prompt("Самое глубокое пресноводное озеро в мире?");
if (answer == "Байкал"){
    alert("Верно");
    point = point + 1; // point++ }else{
    alert("Неверно!");
}

alert("Вы набрали: " + point + " баллов");