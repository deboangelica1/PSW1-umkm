import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const images = [
    "/g1home.jpeg",
    "/PA_Sem1.png",
    "/pemandangan.jpeg"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      
      <h1 style={styles.title}>
        Enjoy The Most <br />
        <span style={styles.highlight}>Delicious Coffee</span>
      </h1>

      <p style={styles.subtitle}>
        Nikmati harimu dengan secangkir kopi dari sebatas kopi.
      </p>

      <div style={styles.imageWrapper}>
        <img src={images[index]} alt="Coffee Slide" style={styles.image} />

        <div style={styles.dotsContainer}>
          {images.map((_, i) => (
            <span
              key={i}
              style={{
                ...styles.dot,
                backgroundColor: index === i ? "#c67c4e" : "#ddd",
              }}
            ></span>
          ))}
        </div>
      </div>

      <button style={styles.button} onClick={() => navigate("/menu")}>
        Explore
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
  },
  highlight: {
    color: "#c67c4e",
  },
  subtitle: {
    marginBottom: "20px",
    fontSize: "18px",
  },
  imageWrapper: {
    width: "100%",
    maxWidth: "900px",
    margin: "auto",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "450px",
    objectFit: "cover",
    borderRadius: "18px",
    transition: "opacity 0.6s ease",
  },
  dotsContainer: {
    position: "absolute",
    bottom: "15px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "8px",
  },
  dot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    transition: "0.3s",
  },
  button: {
    marginTop: "25px",
    padding: "10px 30px",
    backgroundColor: "#c67c4e",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "18px",
    cursor: "pointer",
  },
};

export default Home;
