//< !--СКРИПТ - ОТКРЫТИЕ ССЫЛКИ В НОВОЙ ВКЛАДКЕ-- >


function imgfooter(url) {
    myWin = open(url = "https://informatics.ru");
}



function hittech(url) {
    myWin = open(url = "https://hi-tech.news");
}

//<!--СКРИПТ - ОТКРЫТИЕ ССЫЛКИ В НОВОЙ ВКЛАДКЕ-- >

//< !--СКРИПТ - ВРЕМЯ НА САЙТЕ-- >

function getDate() {

    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    document.getElementById('timedisplay').innerHTML = hours + ':' + minutes;
}
setInterval(getDate, 0);


function getDate2() {

    var date = new Date();
    var datet = date.getDate();
    var montharray = new Array("января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря");
    var month = montharray[date.getMonth()];
    document.getElementById('datedisplay').innerHTML = datet + " " + month;
}
setInterval(getDate2, 0);

//<!--ВРЕМЯ НА САЙТЕ-- >


