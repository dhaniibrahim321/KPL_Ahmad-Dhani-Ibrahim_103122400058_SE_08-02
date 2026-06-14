function hitungHuruf(str) {
  const huruf = str.match(/[a-zA-Z]/g);

  return huruf ? huruf.length : 0;
}

function hitungKata(str) {
    const kata = str.match(/[a-zA-A]+/g);

    return kata ? kata.length : 0;
}

module.exports = {
    hitungHuruf,
    hitungKata
};