import React, { useState } from "react";

const Ulasan = () => {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");
  const [daftarUlasan, setDaftarUlasan] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nama || !pesan) return;

    const ulasanBaru = {
      id: Date.now(),
      nama,
      pesan,
    };

    setDaftarUlasan([ulasanBaru, ...daftarUlasan]);

    setNama("");
    setPesan("");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Ulasan Pengunjung</h1>

      {/* Form Ulasan */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Nama kamu..."
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          style={styles.input}
        />
        <textarea
          placeholder="Tulis ulasanmu..."
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
          style={styles.textarea}
        ></textarea>

        <button type="submit" style={styles.button}>
          Kirim Ulasan
        </button>
      </form>

      {/* List Ulasan */}
      <div style={styles.list}>
        {daftarUlasan.length === 0 ? (
          <p style={{ textAlign: "center", opacity: 0.6 }}>
            Belum ada ulasan...
          </p>
        ) : (
          daftarUlasan.map((u) => (
            <div key={u.id} style={styles.card}>
              <h3 style={styles.nama}>{u.nama}</h3>
              <p style={styles.pesan}>{u.pesan}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
  },
  textarea: {
    padding: "10px",
    fontSize: "16px",
    height: "120px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
    background: "black",
    color: "white",
    border: "none",
  },
  list: {
    marginTop: "20px",
  },
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "15px",
  },
  nama: {
    marginBottom: "5px",
  },
  pesan: {
    opacity: 0.8,
  },
};

export default Ulasan;
