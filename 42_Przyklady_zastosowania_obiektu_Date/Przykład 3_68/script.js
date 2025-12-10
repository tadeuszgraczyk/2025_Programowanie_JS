// przykład 3.68
let data = new Date(2019, 2, 27);
console.log(data);
console.log(data.toString()); //zwraca datę, czas oraz informacje o strefie czasowej w języku angielskim
console.log(data.toLocaleDateString()); //zwraca datę i czas dla bieżących ustawień regionalnych
console.log(data.toUTCString()); //zwraca datę, czas oraz informacje o strefie czasowej dla formatu UTC (Universal Coordinated Time)
console.log(data.toDateString()); //zwraca tylko datę w języku angielskim
console.log(data.toLocaleDateString()); //zwraca tylko datę dla bieżących ustawień regionalnych
console.log(data.toTimeString()); //zwraca tylko czas w języku angielskim
console.log(data.toLocaleTimeString()); //zwraca tylko czas dla bieżących ustawień regionalnych