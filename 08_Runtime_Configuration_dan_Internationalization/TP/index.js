function tanggal() {
    const tanggalSekarang = new Date();

     const formatter = new Intl.DateTimeFormat("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
     });

     return formatter.format(tanggalSekarang);
}

console.log(tanggal());