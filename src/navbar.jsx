import { Link } from "react-router-dom";
import "./index.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div style={styles.logoContainer}>
        <img
          src="/PA_Sem1.png"
          alt="Logo"
          style={styles.logoImg}
        />
        <h2 style={styles.logoText}>CoffeeShop</h2>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Tentang Kami">Tentang Kami</Link>
        <Link to="/Ulasan">Ulasan</Link>
      </div>

    </nav>
  );
}

const styles = {
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "8px",       // jarak antara logo & tulisan
  },

  logoImg: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
  },

  logoText: {
    fontSize: "22px",
    fontWeight: "bold",
  },
};

export default Navbar;
