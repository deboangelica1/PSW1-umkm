import React, { useState } from "react";

function Menu() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Popular Menu</h1>

      <div style={styles.list}>
        
        {/* card gambar ke 1 */}
        <div
          style={{
            ...styles.card,
            ...(hoveredCard === 1 ? styles.cardHover : {})
          }}
          onMouseEnter={() => setHoveredCard(1)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <img
            src="/kopi 1.jpg"
            alt="Americano"
            style={{
              ...styles.image,
              ...(hoveredCard === 1 ? styles.imageHover : {})
            }}
          />
          <h3>Americano</h3>
          <p>Rich, bold, and energizing.</p>
          {/* Harga */}
          <p style={styles.price}>Rp 35.000</p>
        </div>

        {/* card gambar ke 2 */}
        <div
          style={{
            ...styles.card,
            ...(hoveredCard === 2 ? styles.cardHover : {})
          }}
          onMouseEnter={() => setHoveredCard(2)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <img
            src="/kopi2.jpg"
            alt="Latte"
            style={{
              ...styles.image,
              ...(hoveredCard === 2 ? styles.imageHover : {})
            }}
          />
          <h3>Latte</h3>
          <p>Smooth espresso with creamy milk.</p>
          {/* Harga */}
          <p style={styles.price}>Rp 28.000</p>
        </div>

        {/* card gambar ke 3 */}
        <div
          style={{
            ...styles.card,
            ...(hoveredCard === 3 ? styles.cardHover : {})
          }}
          onMouseEnter={() => setHoveredCard(3)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <img
            src="/kopi 3.jpeg"
            alt="Mocha"
            style={{
              ...styles.image,
              ...(hoveredCard === 3 ? styles.imageHover : {})
            }}
          />
          <h3>Mocha</h3>
          <p>Perfect blend of chocolate + coffee.</p>
          {/* Harga */}
          <p style={styles.price}>Rp 25.000</p>
        </div>
        
        {/* card gambar ke 4*/}
        <div
        style={{ ...styles.card,
          ...(hoveredCard === 4 ? styles.cardHover : {})
        }}
        onMouseEnter={() => setHoveredCard(4)}
        onMouseLeave={() => setHoveredCard(null)}
        >
          <img src="/bs1.jpg"
           alt="kopi"
           style={{
            ...styles.image,
            ...(hoveredCard === 4 ? styles.imageHover : {})
           }} />
           <h3>Kopi Gula Aren</h3>
           <p>Kopi ini cocok untuk kamu penikmat gula aren!</p>
           {/* Harga */}
           <p style={styles.price}>Rp 20.000</p>
        </div>
       {/* card gambar ke 5*/}
        <div
        style={{ ...styles.card,
          ...(hoveredCard === 5 ? styles.cardHover : {})
        }}
        onMouseEnter={() => setHoveredCard(5)}
        onMouseLeave={() => setHoveredCard(null)}
        >
          <img src="/bs2.jpg"
           alt="kopi"
           style={{
            ...styles.image,
            ...(hoveredCard === 4 ? styles.imageHover : {})
           }} />
           <h3>Kopi Gula Aren</h3>
           <p>Kopi ini cocok untuk kamu penikmat gula aren!</p>
           {/* Harga */}
           <p style={styles.price}>Rp 20.000</p>
        </div>
         {/* card gambar ke 6 */}
        <div
          style={{
            ...styles.card,
            ...(hoveredCard === 6 ? styles.cardHover : {})
          }}
          onMouseEnter={() => setHoveredCard(6)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <img
            src="/bs3.jpg"
            alt="kopi"
            style={{
              ...styles.image,
              ...(hoveredCard === 6 ? styles.imageHover : {})
            }}
          />
          <h3>Latte</h3>
          <p>Smooth espresso with creamy milk.</p>
          {/* Harga */}
          <p style={styles.price}>Rp 28.000</p>
        </div>
         {/* card gambar ke 7 */}
        <div
          style={{
            ...styles.card,
            ...(hoveredCard === 7 ? styles.cardHover : {})
          }}
          onMouseEnter={() => setHoveredCard(7)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <img
            src="/bs4.jpg"
            alt="kopi"
            style={{
              ...styles.image,
              ...(hoveredCard === 7 ? styles.imageHover : {})
            }}
          />
          <h3>Latte</h3>
          <p>Smooth espresso with creamy milk.</p>
          {/* Harga */}
          <p style={styles.price}>Rp 28.000</p>
        </div>
         {/* card gambar ke 8 */}
        <div
          style={{
            ...styles.card,
            ...(hoveredCard === 8 ? styles.cardHover : {})
          }}
          onMouseEnter={() => setHoveredCard(8)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <img
            src="/bs5.jpg"
            alt="kopi"
            style={{
              ...styles.image,
              ...(hoveredCard === 8 ? styles.imageHover : {})
            }}
          />
          <h3>Latte</h3>
          <p>Smooth espresso with creamy milk.</p>
          {/* Harga */}
          <p style={styles.price}>Rp 28.000</p>
        </div>
         {/* card gambar ke 9 */}
        <div
          style={{
            ...styles.card,
            ...(hoveredCard === 9 ? styles.cardHover : {})
          }}
          onMouseEnter={() => setHoveredCard(9)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <img
            src="/bs6.jpg"
            alt="kopi"
            style={{
              ...styles.image,
              ...(hoveredCard === 9 ? styles.imageHover : {})
            }}
          />
          <h3>Latte</h3>
          <p>Smooth espresso with creamy milk.</p>
          {/* Harga */}
          <p style={styles.price}>Rp 28.000</p>
        </div>
        {/* card gambar ke 9 */}
        <div
          style={{
            ...styles.card,
            ...(hoveredCard === 10 ? styles.cardHover : {})
          }}
          onMouseEnter={() => setHoveredCard(10)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <img
            src="/bs10.jpg"
            alt="kopi"
            style={{
              ...styles.image,
              ...(hoveredCard === 10 ? styles.imageHover : {})
            }}
          />
          <h3>Kopi Lambhuk</h3>
          <p>Smooth espresso with creamy milk.</p>
          {/* Harga */}
          <p style={styles.price}>Rp 28.000</p>
        </div>

    </div>
    </div>
  );
}

const styles = {
  page: {
    padding: "20px",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
    fontSize: "32px",
    fontWeight: "bold",
  },
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },

  // Card default
  card: {
    padding: "15px",
    borderRadius: "14px",
    backgroundColor: "#ffffff",
    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    transform: "scale(1)",
  },

  // Card hover effect
  cardHover: {
    transform: "scale(1.05) translateY(-5px)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
  },

  // Gambar default
  image: {
    width: "100%",
    maxWidth: "200px",
    height: "180px",
    objectFit: "cover",
    borderRadius: "40px",
    marginBottom: "10px",
    transition: "all 0.3s ease",
  },

  // Gambar zoom saat hover
  imageHover: {
    transform: "scale(1.08)",
    filter: "brightness(110%)",
  },

   price: {
    fontWeight: "bold",
    color: "#d35400",
    marginTop: "8px",
  },
};

export default Menu;
