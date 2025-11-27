import React from "react";

const Contact = () => {

    const handleSend = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const text = `Halo, saya ${name}%0AEmail: ${email}%0APesan: ${message}`;
    const waURL = `https://wa.me/6281260434730?text=${text}`;

    window.open(waURL, "_blank");
  };
  
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Kontak Kami</h1>

      <p style={styles.text}>
        Jika Anda memiliki pertanyaan, saran, atau ingin melakukan pemesanan,
        silakan hubungi kami melalui informasi berikut:
      </p>

      <div style={styles.card}>
        <h3>📍 Alamat</h3>
        <p>
          <a href="https://maps.app.goo.gl/UNey4wMNwVD7Zd339?g_st=aw"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0000EE", textDecoration: "underline" }}>Balige, Kabupaten Toba, Sumatera Utara.</a></p>

        <h3>📞 Telepon</h3>
        <p>+62 812 3456 7890</p>

        <h3>✉️ Email</h3>
        <p>sebataskopi@gmail.com</p>
        
        <h3>Atau hubungi Kami pada:</h3>
         <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
  {/* Instagram */}
  <a 
    href="https://www.instagram.com/sebatas.kopi?igsh=MTlnMDZtOXNtd3BqYQ==" 
    target="_blank" 
    rel="noopener noreferrer" 
    style={styles.iconButton}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      viewBox="0 0 24 24" fill="#d62976" stroke="black" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  </a>

  {/* WhatsApp */}
  <a 
    href="https://wa.me/6283823253780"
    target="_blank"
    rel="noopener noreferrer"
    style={styles.iconButton}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#25D366"
     viewBox="0 0 24 24">
      <path d="M20 3.5A10.5 10.5 0 0 0 3.6 16.8L2 22l5.4-1.5A10.4 10.4 0 0 0 12 21a10.5 10.5 0 0 0 8-17.5zM12 19a8 8 0 0 1-4.2-1.2l-.3-.2-3.2.9.9-3.1-.2-.3A8.1 8.1 0 1 1 12 19zm4.3-5.7c-.3-.2-1.7-.9-2-.9s-.5-.1-.7.2-.8 1-.9 1.2-.3.2-.6.1a6.5 6.5 0 0 1-3.2-2.8c-.3-.5-.3-.8 0-1.1l.4-.6c.1-.2.2-.3.3-.5s0-.4-.1-.6c-.2-.2-.7-1.7-.9-2.3s-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.1-1.2 2.7 1.2 3.1 1.4 3.3.6.8 1.3 1.4 2.5 1.7 3.5 2h0c1.1.4 1.9.3 2.6.2s1.3-.6 1.5-1.3.2-1.1.1-1.3-.3-.2-.7-.4z"></path>
    </svg>
  </a>

  {/* TikTok */}
  <a 
    href="https://www.tiktok.com"
    target="_blank"
    rel="noopener noreferrer"
    style={styles.iconButton}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      fill="black" viewBox="0 0 24 24">
      <path d="M16.5 2h2.3c-.1 2 1.4 3.5 3.2 3.7v2.3c-1.2.1-2.3-.2-3.3-.9v7.4c0 3-2.5 5.5-5.5 5.5S7.7 17.5 7.7 14.5s2.5-5.5 5.5-5.5h.3V11c-.2 0-.4-.1-.6-.1-1.8 0-3.2 1.4-3.2 3.2S11 17.3 12.8 17.3s3.2-1.4 3.2-3.2V2z"/>
    </svg>
  </a>
</div>

<p> <small>(Tinggal Klik saja Logo Di atas)</small></p>



        <h3>🕒 Jam Operasional</h3>
        <p>Senin - Minggu: 10.00 - 22.00</p>
      </div>

      <h2 style={styles.subheader}>Formulir Pesan</h2>
      <p><small>(Jika anda ingin <b>memesan</b> atau <b>memberi kami sebuah pesan </b> , silahkan isi form dibawah ini)</small></p>

      <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
  <input id="name" type="text" placeholder="Nama Anda" style={styles.input} />
  <input id="email" type="email" placeholder="Email Anda" style={styles.input} />
  <textarea id="message" placeholder="Pesan Anda..." style={styles.textarea}></textarea>

  <button
    type="button"
    style={styles.button}
    onClick={handleSend}
  >
    Kirim
  </button>
</form>

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
    marginTop: "30px",
    marginBottom: "10px",
  },
  text: {
    fontSize: "17px",
    marginBottom: "15px",
  },
  card: {
    background: "#f5f5f5",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  textarea: {
    padding: "12px",
    height: "120px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    padding: "12px",
    background: "black",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Contact;
