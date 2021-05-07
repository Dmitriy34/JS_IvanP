// 35 Async, Defer, Динамические скрипты
//Загрузка скриптов на страницу 
"use strict";

const p = document.querySelector('p');
console.log(p);

//? Скрипты defer
// Если указание скрипта в HTML стоит ранее кода, с которым он работает, он все равно его обработает
// Скрипты defer не блокируют загрузку страницу, т.е скрипты будут загружаться в фоном режиме параллельно с HTML кодом дальше
// Они срабатывают (последовательно, если их несколько), когда загрузится вся структура DOM дерева

//? Скрипты async
//  1) Страница не ждет асинхронных скриптов, содержимое обрабатывается и отображается
//  2) Скрипты в DOMContentLoaded и async не ждут друг друга
//  3) Скрипты async не ждут друг друга, они сразу загрузились и выполнились (например для счетчиков статистики)

// const script = document.createElement('script');
// script.src = "js/test.js"; 
// script.async = false;          // отключаем режим async, прикрепленного нами скрипта
// document.body.append(script);  // поместить элемент внутрь себя в конец


function loadScript(src){
    const script = document.createElement('script');
    script.src = src; 
    script.async = false;   
    document.body.append(script);  
}

loadScript("js/test.js");
loadScript("js/some.js");