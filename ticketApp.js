//Проверка на число одного значения
function isNumber1Dig(x) {
    if(isNaN(x) || (x === "") || (x === " ")) {
        return true;
    } else {
        return false;
    }
}

/*1. Напишите веб-приложение для расчета счастливого билета. Пользователь вводит шестизначный номер билета(трамвай/троллейбус). 
Определите, равна ли сумма первых трех цифр сумме последних трех цифр. Выведите сообщение о "счастливости" билета пользователю.*/
function luckyTicket() {
    let obj = {
        DOMInput: document.querySelector("#ticketNumber"),
        ticketUser: "",
        myCase: true,
        result: document.querySelector(".resultTicket")
    };
    
    obj.ticketUser = obj.DOMInput.value;
    obj.myCase = isNumber1Dig(obj.ticketUser);

    //Если пользователь ввел нечисло, выдаем ошибку
    if(obj.myCase || (obj.ticketUser.length != 6)) {
        return obj.result.innerHTML = "ОШИБКА! Введите число!";
    }

    let n1 = obj.ticketUser[0]*1,
        n2 = obj.ticketUser[1]*1,
        n3 = obj.ticketUser[2]*1,
        n4 = obj.ticketUser[3]*1,
        n5 = obj.ticketUser[4]*1,
        n6 = obj.ticketUser[5]*1;

    if((n1 + n2 + n3) == (n4 + n5 + n6)) {
        obj.result.innerHTML = "ПОЗДРАВЛЯЕМ! У Вас счастливый билет!";
    } else {
        obj.result.innerHTML = "Увы... У Вас несчастливый билет.";
    }  
}

/*2. Создайте веб-приложение для определения купе в плацкартном вагоне по номеру билета. Пользователь вводит номер места, вывести ему номер купе, 
тип места - боковое или нет, верхнее или нижнее.*/
function placeNumber() {
    let obj = {
        DOMInput: document.querySelector("#placeNumber"),
        placeNumber: "",
        myCase: true,
        result: document.querySelector(".resultPlace"),
        coupeNumb: 0,
        placeUpDown: "",
        placeAside: "",
        arr: [
            [54, 53], [52, 51],
            [50, 49], [48, 47],
            [46, 45], [44, 43],
            [42, 41], [40, 39],
            [38, 37]
        ]
    };

    obj.placeNumber = Math.floor(obj.DOMInput.value);
    obj.myCase = isNumber1Dig(obj.placeNumber);

    //Если пользователь ввел нечисло, выдаем ошибку
    if(obj.myCase || obj.placeNumber < 1 || obj.placeNumber > 54) {
        return obj.result.innerHTML = "ОШИБКА! Введите число!";
    }
    
    obj.DOMInput.value = Math.floor(obj.DOMInput.value);

    if(obj.placeNumber <= 36) {
        obj.placeAside = "Не боковое место";

        if((obj.placeNumber % 4) == 0) {
            obj.coupeNumb = obj.placeNumber / 4;
        } else {
            obj.coupeNumb = Math.floor(obj.placeNumber / 4) + 1;
        }
    } else {
        obj.placeAside = "Боковое место";

        for (let i in obj.arr) {
            for (let n in obj.arr) {
                if (obj.placeNumber == obj.arr[i][n]) {
                    obj.coupeNumb = ++i;
                }
            }
        }
    }
    
    if((placeNumber % 2) == 0) {
        obj.placeUpDown = "Верхнее место";
    } else {
        obj.placeUpDown = "Нижнее место";
    }   
    
    obj.result.innerHTML = `Номер Вашего купе: ${obj.coupeNumb}. ${obj.placeAside}. ${obj.placeUpDown}`;
}

let btnLuckyTicket = document.querySelector("#btnLuckyTicket"),
    btnPlace = document.querySelector("#btnPlace");

btnLuckyTicket.addEventListener("click", luckyTicket);
btnPlace.addEventListener("click", placeNumber);




