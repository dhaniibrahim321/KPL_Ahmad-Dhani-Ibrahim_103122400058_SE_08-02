function hitung(str, mode) {
    let jumlahSemua = 0;

    for (const c of str) {
        jumlahSemua++;
    }

    let jumlahHuruf = 0;
    for (const c of str) {
        if (c === ' ') continue;
        jumlahHuruf++;
    }

    if (mode == "semua") {
        return jumlahSemua;
    } else if (mode == "huruf") {
        return jumlahHuruf;
    }
}


const str = "Bar bar bar";
console.log(hitung(str, "semua")); // Harusnya 11

console.log(hitung(str, "huruf")); // Harusnya 9

hitung(str, "huruf"); // Tidak terjadi apa-apa