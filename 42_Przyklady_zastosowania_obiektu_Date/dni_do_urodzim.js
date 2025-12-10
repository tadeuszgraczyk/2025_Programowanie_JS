/*Napisz funkcję w JS, która dla podanej daty urodzenia w postaci RRRR/MM/DD
odpowiada ile dni pozostaje do jego urodzin.*/


const dniDoUrodzin = (dataUrodzenia) => {
    const dzisiaj = new Date();
    const [rok, miesiac, dzien] = dataUrodzenia.split('/').map(Number);

    let najblizszeUrodziny = new Date(dzisiaj.getFullYear(), miesiac - 1, dzien);

    if (najblizszeUrodziny < dzisiaj) {
        najblizszeUrodziny = new Date(dzisiaj.getFullYear() + 1, miesiac - 1, dzien);
    }

    const roznica = najblizszeUrodziny - dzisiaj;
    const dni = Math.ceil(roznica / (1000 * 60 * 60 * 24));

    return dni;
};
let wynik = dniDoUrodzin("2024/11/9")
console.log(wynik);