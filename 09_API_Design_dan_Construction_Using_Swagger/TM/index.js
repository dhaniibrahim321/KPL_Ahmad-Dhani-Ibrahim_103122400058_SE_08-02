const express = require('express');

const app = express();
const PORT = 8080;

app.use(express.json());

function buatAngka(nama) {
    let total = 0;

    for(let i = 0; i < nama.length; i++) {
        total += nama.charCodeAt(i);
    }

    return (total % 100) + 1;
}

app.post('/', (req, res) => {
    const {nama, tebakan} = req.body;

    const angkaBenar = buatAngka(nama);

    let jawaban = "";

    if(tebakan == angkaBenar) {
        jawaban = `Benar sekali, tebakannya adalah ${angkaBenar}.`;
    } else if(tebakan > angkaBenar) {
        jawaban = `Tebakanmu terlalu tinggi!`;
    } else {
        jawaban = `Tebakanmu terlalu rendah!`;
    }

    res.json({jawaban});
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});

