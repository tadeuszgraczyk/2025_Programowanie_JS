function showtime() {
    let data_n= new Date();
    let godz =data_n.getHours();
    let min= data_n.getMinutes();
    let sek= data_n.getSeconds();
    let czas ="" +godz;
    czas+=((min <10)?":0": ":") + min;
    czas+=((sek <10)?":0": ":") + sek;
console.log(czas);
}
//Przykład 3.73
setTimeout("showtime()",1000);