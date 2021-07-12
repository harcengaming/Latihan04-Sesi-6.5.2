//No.1

function tokoOnline(namaPembeli, produkDibeli) {
    return console.log("Terima kasih", namaPembeli, "telah membeli produk", produkDibeli);
}
// tokoOnline("Harcen", "Laptop Acer");
console.log(tokoOnline("Harcen", "Laptop Acer"));   

//No.2
//convert temperatur Celsius ke Fahrenherit
function multiplyByNineFifths(number) {
    return number * (9/5);
};

function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
};

console.log(getFahrenheit(15));

//convert temperatur fahrenheit ke Celsius
function kurangFahrenheit(number) {
    return (number - 32);
};

function getCelsius(fahrenheit) {
    return kurangFahrenheit(fahrenheit) * (5/9);
};

getCelsius(15);
console.log(getCelsius(15));

//Uji coba convert temperatur Celsius ke Fahrenherit
let suhu = 15
let normalizeSuhu = (suhu) => {
    return suhu * (9/5);
};

let toFahrenheit = (normalize) => {
    return normalizeSuhu(normalize) + 32;
};
console.log(toFahrenheit(suhu));


//No.3

function tebakUmur(usia) {
    if(usia == 1) {
        console.log(usia * 15);
    }else if(usia == 2) {
        console.log(usia * 12);
    }else if(usia > 2){
        console.log((usia - 2) * 4 + 24);
    }     
}
tebakUmur(4);

//No.4
const changeLetter = (kalimat) => {
    return kalimat.toLowerCase();
}

changeLetter('HARCEN');
console.log(changeLetter('HARCEN'));


//No.5
//a.
function tokoOnline(namaPembeli, produkDibeli) {
    return `Terima kasih ${namaPembeli} telah membeli produk ${produkDibeli}`
}
// tokoOnline("Vivian", "Tas gunung");
console.log(tokoOnline("Shoto Todoraki", "Tas gunung"));

//b.
let suhu2 = 145
//celsiustofahrenheit
let celsiusToFahrenheit = (suhu2) => {
    return suhu2 * (9/5) + 32;
};
console.log(celsiusToFahrenheit(suhu2));

//fahrenheitToCelsius
let fahrenheitToCelsius = (suhu2) => {
    return (suhu2 - 32) * (5/9);
};
console.log(fahrenheitToCelsius(suhu2));

//c.

function umurSaya(usia2) {
    if(usia2 == 1) {
        console.log(usia2 * 15);
    }else if(usia2 == 2) {
        console.log(usia2 * 12);
    }else if(usia2 > 2){
        console.log((usia2 - 2) * 3 + 14);
    }     
}
umurSaya(5);

//d.
const ubahHuruf = (kalimat) => {
    return kalimat.toUpperCase();
}

ubahHuruf('Video Code Studio');
console.log(ubahHuruf('Video Code Studio'));

//sekreatif

//selesai