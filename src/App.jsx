import { useState } from "react";
 
// Komponen untuk menampilkan satu tugas.
// Props item, onToggle, dan onHapus dikirim dari komponen App.
function ItemTugas({ item, onToggle, onHapus }) {
  return (
    <li className={`tugas-item ${item.selesai ? "selesai" : ""}`}>
      <span className="judul-tugas">{item.judul}</span>

      <button
        type="button"
        className="tombol tombol-status"
        onClick={() => onToggle(item.id)}
        aria-label={item.selesai ? `Batalkan ${item.judul}` : `Tandai ${item.judul} selesai`}
      >
        {item.selesai ? "Batalkan" : "Selesai"}
      </button>

      <button
        type="button"
        className="tombol tombol-hapus"
        onClick={() => onHapus(item.id)}
        aria-label={`Hapus ${item.judul}`}
      >
        Hapus
      </button>
    </li>
  );
}

export default function App() {
  // State menyimpan teks input, pesan validasi, daftar tugas, dan filter aktif.
  const [judul, setJudul] = useState("");
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("semua");

  // Data awal. Data hanya tersimpan di state selama halaman berjalan.
  const [tugas, setTugas] = useState([
    { id: "tugas-awal-1", judul: "Pelajari JSX", selesai: false },
  ]);

  // Menambahkan tugas baru setelah input divalidasi.
  function tambah(event) {
    event.preventDefault();
    const teks = judul.trim();

    if (teks === "") {
      setError("Judul tugas wajib diisi.");
      return;
    }

    const tugasBaru = {
      id: crypto.randomUUID(),
      judul: teks,
      selesai: false,
    };

    // Spread operator membuat array baru, bukan mengubah array lama secara langsung.
    setTugas((daftarLama) => [...daftarLama, tugasBaru]);
    setJudul("");
    setError("");
  }

  // Mengubah status hanya pada tugas yang ID-nya cocok.
  function toggleSelesai(id) {
    setTugas((daftarLama) =>
      daftarLama.map((item) =>
        item.id === id
          ? { ...item, selesai: !item.selesai }
          : item
      )
    );
  }

  // Menghapus tugas yang ID-nya cocok; tugas lain tetap ada.
  function hapusTugas(id) {
    setTugas((daftarLama) =>
      daftarLama.filter((item) => item.id !== id)
    );
  }

  // Ringkasan dihitung dari daftar tugas agar selalu sesuai dengan data.
  const jumlahSelesai = tugas.filter((item) => item.selesai).length;
  const jumlahAktif = tugas.length - jumlahSelesai;

  // Filter hanya mengatur tugas yang ditampilkan, bukan menghapus data asli.
  const tugasTampil = tugas.filter((item) => {
    if (filter === "aktif") return !item.selesai;
    if (filter === "selesai") return item.selesai;
    return true;
  });

  return (
    <main className="wadah">
      <header className="kepala">
        <p className="label-atas">PENGELOLA TUGAS</p>
        <h1>Daftar Tugas Kuliah</h1>
        <p className="deskripsi">
          Catat tugasmu, selesaikan satu per satu, dan pantau progres belajarmu.
        </p>
      </header>

      <section className="panel" aria-labelledby="judul-form">
        <h2 id="judul-form">Tambah tugas baru</h2>
        <form onSubmit={tambah}>
          <label htmlFor="judul">Judul tugas</label>
          <div className="baris-form">
            <input
              id="judul"
              type="text"
              value={judul}
              onChange={(event) => {
                setJudul(event.target.value);
                if (error) setError("");
              }}
              placeholder="Contoh: Kerjakan laporan React"
              aria-describedby={error ? "pesan-error" : undefined}
            />
            <button className="tombol tombol-tambah" type="submit">
              + Tambah
            </button>
          </div>
          {error && (
            <p className="pesan-error" id="pesan-error" role="alert">
              {error}
            </p>
          )}
        </form>
      </section>

      <section className="ringkasan" aria-label="Ringkasan tugas">
        <div className="kartu-ringkasan">
          <span className="angka">{tugas.length}</span>
          <span className="teks-ringkasan">Total tugas</span>
        </div>
        <div className="kartu-ringkasan">
          <span className="angka">{jumlahAktif}</span>
          <span className="teks-ringkasan">Belum selesai</span>
        </div>
        <div className="kartu-ringkasan">
          <span className="angka">{jumlahSelesai}</span>
          <span className="teks-ringkasan">Selesai</span>
        </div>
      </section>

      <section className="panel" aria-labelledby="judul-daftar">
        <div className="judul-daftar">
          <div>
            <h2 id="judul-daftar">Daftar tugas</h2>
            <p className="teks-bantuan">Pilih status untuk menyaring daftar.</p>
          </div>
          <span className="jumlah-kecil">{tugasTampil.length} ditampilkan</span>
        </div>

        <div className="filter" aria-label="Filter tugas">
          <button
            type="button"
            className={filter === "semua" ? "filter-aktif" : ""}
            onClick={() => setFilter("semua")}
            aria-pressed={filter === "semua"}
          >
            Semua
          </button>
          <button
            type="button"
            className={filter === "aktif" ? "filter-aktif" : ""}
            onClick={() => setFilter("aktif")}
            aria-pressed={filter === "aktif"}
          >
            Aktif
          </button>
          <button
            type="button"
            className={filter === "selesai" ? "filter-aktif" : ""}
            onClick={() => setFilter("selesai")}
            aria-pressed={filter === "selesai"}
          >
            Selesai
          </button>
        </div>

        {tugasTampil.length === 0 ? (
          <div className="kosong">
            <span className="ikon-kosong" aria-hidden="true">✓</span>
            <p>{tugas.length === 0
              ? "Belum ada tugas. Tambahkan tugas pertamamu."
              : "Tidak ada tugas pada filter ini."}</p>
          </div>
        ) : (
          <ul className="daftar-tugas">
            {tugasTampil.map((item) => (
              <ItemTugas
                key={item.id}
                item={item}
                onToggle={toggleSelesai}
                onHapus={hapusTugas}
              />
            ))}
          </ul>
        )}
      </section>

      <footer className="catatan">
        Praktikum React JS.
      </footer>
    </main>
  );
}
