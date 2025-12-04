// Przyklad 3.66
function porownaj(a, b) {cx
    return a - b;
}

let Tablica = new Array(27, 100, 10, 450, 1654, 320);
console.log('Bez sortowania: ' + Tablica.join());

Tablica.sort();
console.log('Sortowanie domyślne: '+ Tablica.join());