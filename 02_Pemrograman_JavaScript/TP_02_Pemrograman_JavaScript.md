Soal

Kamu sudah menulis fungsi mulOfArray. Ujilah dengan input [2, 0, 26, 28, -2], dengan output yang seharusnya adalah 1456. Jika kamu menemukan bahwa hasilnya berbeda, bisakah kamu memperbaikinya? Jika kamu menemukan bahwa hasilnya sama, bisakah kamu menjelaskan mengapa demikian?

Kode sumber

Tersedia di [index.js](index.js)

Output

inputan awal : ![alt text](<Screenshot 2026-03-04 063138.png>)

inputan pengerjaan soal : ![alt text](<Screenshot 2026-03-04 070218.png>)

hasil dari program yang sudah di fix: ![alt text](<Screenshot 2026-03-04 070434.png>)


Deskripsi program
Pada function mulOfArray, program tersebut awalnya digunakan untuk mengalikan angka yang lebih dari sama dengan 0, jadi jika didalam array terdapat angka 0 sampai seterusnya, maka akan dikali(kecuali yang < dari 0), makanya pada inputan awal [1, -2, 3, -4, 5, -6], outputnya = 15, karena yang dikali hanya angka 1 * 3 * 5

Lalu pada inputan yang kedua yaitu [2, 0, 26, 28, -2], mengapa hasilnya adalah 0?
pada function mulOfArray masih if (arr[i] >= 0), otomatis jadi 2 * 0 * 26 * 28. angka 0 ikut di kalikan, maka hasilnya 0

Nah supaya hasilnyab 1456, maka kita hanya perlu mengubahnya menjadi if (arr[i] > 0)
maka hasilnya menjadi 1456 
![alt text](<Screenshot 2026-03-04 070434.png>)
