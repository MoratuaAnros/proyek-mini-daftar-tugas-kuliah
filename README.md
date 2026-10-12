# Daftar Tugas Kuliah

## Deskripsi

Daftar Tugas Kuliah merupakan aplikasi web sederhana yang dibuat menggunakan React JS untuk membantu pengguna mencatat dan mengelola tugas kuliah. Aplikasi ini menyediakan fungsi untuk memantau tugas yang sudah selesai maupun yang belum selesai.

Proyek ini dibuat sebagai bagian dari praktikum Pemrograman Berbasis Web untuk mempelajari penerapan React JS dalam pengembangan aplikasi web interaktif.

## Fitur Aplikasi

1. Menambahkan tugas baru melalui kolom input.
2. Menampilkan daftar tugas yang telah ditambahkan.
3. Mengubah status tugas menjadi selesai atau membatalkannya.
4. Menghapus tugas dari daftar.
5. Menampilkan ringkasan jumlah seluruh tugas, tugas yang belum selesai, dan tugas yang sudah selesai.
6. Menyaring daftar tugas berdasarkan status semua, aktif, dan selesai.
7. Memvalidasi input agar judul tugas tidak boleh kosong.

## Teknologi yang Digunakan

* **React JS** untuk membuat antarmuka aplikasi.
* **JavaScript** untuk mengatur logika dan fungsi aplikasi.
* **HTML** untuk struktur halaman melalui JSX.
* **CSS** untuk mengatur tampilan aplikasi.
* **Vite** sebagai alat bantu pengembangan dan menjalankan aplikasi.

## Struktur Folder

```text
proyek-mini-daftar-tugas-kuliah/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Cara Menjalankan Aplikasi

1. Pastikan Node.js dan npm sudah terpasang di komputer.

2. Buka terminal pada folder proyek.

3. Jalankan perintah berikut untuk memasang dependensi:

   ```bash
   npm install
   ```

4. Jalankan aplikasi menggunakan perintah:

   ```bash
   npm run dev
   ```

5. Buka alamat lokal yang muncul di terminal menggunakan browser.

## Penyimpanan Data

Data tugas dikelola menggunakan state `useState` dari React. Pada versi ini, data tidak disimpan secara permanen ke database atau `localStorage`. Oleh karena itu, perubahan data dapat hilang ketika halaman dimuat ulang.

## Tujuan Pembelajaran

Melalui proyek ini, saya mempelajari penggunaan komponen React, JSX, props, state, event handling, conditional rendering, serta metode array seperti `map()` dan `filter()` untuk mengelola data dan menampilkan antarmuka yang interaktif.