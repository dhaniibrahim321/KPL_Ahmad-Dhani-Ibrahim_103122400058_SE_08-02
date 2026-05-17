require ('dotenv').config();

const BASE_API = process.env.BASE_API;

async function cekKurs(uang) {
    const response = await fetch(BASE_API);
    const data = await response.json();

    const cnh = uang * data .idr.cnh;
    const eur = uang * data.idr.eur;

    const tanggal = new Intl.DateTimeFormat('id-ID', {
        day : 'numeric',
        month : 'long',
        year : 'numeric'
    }).format(new Date());

    const rupiah = new Intl.NumberFormat('id-ID').format(uang);
    const formatCNH = new Intl.NumberFormat('zh-CN', {
        style : 'currency',
        currency : 'CNY'
    }).format(cnh);
    const formatEURO = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency : 'EUR'
    }).format(eur);

    console.log(`kurs Rp${rupiah} pada ${tanggal} adalah ${formatCNH} dan ${formatEURO}`);
}

cekKurs(25000);
cekKurs(50000);
cekKurs(100000);
