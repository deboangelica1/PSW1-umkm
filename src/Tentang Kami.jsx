import React from "react";

const TentangKami = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Tentang Kami test</h1>

      <p style={styles.text}>
        Selamat datang di <strong>Cafe Kami</strong>!  
        Kami berdedikasi untuk menyajikan minuman terbaik dengan kualitas bahan
        terbaik, cita rasa yang selalu konsisten, dan pelayanan yang ramah.
      </p>

      <p style={styles.text}>
        Sejak awal berdiri, kami berkomitmen memberikan pengalaman tongkrongan yang
        nyaman, dan membuat para pelanggan merasa seperti di rumah.
      </p>

      <h2 style={styles.subheader}>Misi Kami</h2>
      <ul style={styles.list}>
        <li>Menyajikan minuman berkualitas tinggi untuk semua pelanggan.</li>
        <li>Memberikan pelayanan terbaik dan ramah.</li>
        <li>Menciptakan suasana nyaman bagi keluarga, teman, dan semua pengunjung.</li>
      </ul>

      <h2 style={styles.subheader}>Visi Kami</h2>
      <p style={styles.text}>
        Menjadi cafe favorit yang dipercaya masyarakat karena kualitas rasa,
        kebersihan, dan pelayanan yang luar biasa.
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "auto",
    padding: "20px",
    lineHeight: "1.6",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  subheader: {
    marginTop: "25px",
    marginBottom: "10px",
  },
  text: {
    fontSize: "17px",
    marginBottom: "15px",
  },
  list: {
    paddingLeft: "20px",
    marginBottom: "15px",
  },
};

export default TentangKami;
