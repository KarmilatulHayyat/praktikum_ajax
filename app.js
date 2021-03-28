function realtimeClock() {

    var rtClock = new Date();

    var hours = rtClock.getHours(); 
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();
    
    //bulan tanggal tahun 
    var year = rtClock.getFullYear(); //tahun
    var month = rtClock.getMonth(); // bulan
    var day = rtClock.getDay(); // hari
    var hari = rtClock.getUTCDate(); //tanggal
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    //add AM and PM System
    var amPm = ( hours , 12 ) ? "AM" : "PM";

    //Convert the hours component to 12-hour format
    hours = (hours > 12 ) ? hours - 12 : hours;

    // Pad the hours, minutes, and seconds with leading zeros
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    //Display the clock
    document.getElementById('clock').innerHTML =
    hours + " : " + minutes + " : " + seconds + " " + amPm;
    var t = setTimeout(realtimeClock, 500);

    document.getElementById('bulan').innerHTML =
    months[month] + " " + hari + " " + days[day] + " " + year;
}