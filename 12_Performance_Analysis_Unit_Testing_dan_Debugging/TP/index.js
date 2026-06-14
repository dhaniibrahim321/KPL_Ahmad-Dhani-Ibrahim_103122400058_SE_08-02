function main() {
  const data = [
    "123",
    456,
    "hello",
    78.9,
    true,
  ];

  for (let i = 0; i < data.length; i++) {
    const result = processData(data[i]);
    console.log(`Item ${i + 1}: ${data[i]} -> ${result}`);
  }
}

function processData(data) {
  try {
    const str = String(data).toLowerCase();

    if (!isNaN(data) && data !== true && data !== false) {
      return `Number: ${Number(data) * 2}`;
    }

    return `Teks: ${str} (panjangnya: ${str.length})`;
  } catch (error) {
    return "Terjadi kesalahan saat memproses data";
  }
}

main();