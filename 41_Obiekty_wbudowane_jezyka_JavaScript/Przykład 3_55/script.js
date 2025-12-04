//Przykład 3.54
String.prototype.duzaLitera = function () {
    return this.charAt(0).toUpperCase() + this.substr(1);
}

// Przykład 3.55
let tx1 = 'komputer';
console.log(tx1.duzaLitera());
