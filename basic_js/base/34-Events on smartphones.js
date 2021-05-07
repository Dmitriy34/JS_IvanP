// 34 События на смартфонах (мобильных устройствах)

// Событий на смартфонах 6 типов.
// touchstart -  событие при касание элемента
// touchmove - палец двигается по экрану
// touchend - убираем (отрываем) от элемента

// touchenter - когда ведем пальцем по экрану, и попадаем на элемент, на который повесили событие 
// touchleave - когда ведем пальцем по экрану, и уходим за границы элемента
// touchcancel - когда точка соприкосновения на поверхности больше не регистрируется

//TODO В devtools нужно переключится на мобильную разработку
windows.addEventListener('DOMContentLoaded', () => { // 3:55"
    const box = document.querySelector('.box');
    // ? События
    // происходит когда нажимаем на красный квадрат
    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('Start');
    });

    // происходит когда двигаем курсор (или пальцем)
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log('Move');
    });

    // происходит когда отжимаем (отпускаем) мышку (палец) с элемента
    box.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log('End');
    });

    // Свойства
    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('Start');
        console.log(e.touches);
    });

    // Отслеживание курсора (пальца) touchmove 
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log('Start');
        console.log(e.targetTouches[0].pageX);
    });
}); 

// ? свойства у объекта event

// touches - свойство показывает то количество (список) пальцев, которые взаимодействует по всему экрану
// targetTouches - показывает список пальцев, которые взаимодействуют с конкретным элементом
// changedTouches - показывает список пальцев, которое участвует в текущем событие
