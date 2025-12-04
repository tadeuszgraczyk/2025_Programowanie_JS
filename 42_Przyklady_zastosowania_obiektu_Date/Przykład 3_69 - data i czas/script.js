let data_n = new Date();
let data_l = data_n.toString();
let data_u = data_n.toGMTString();
let data_r = data_n.toLocaleString();
console.log("Czas lokalny:" + data_l );
console.log("Czas uniwersalny:" + data_u );
console.log("Czas regionalny:" + data_r );