import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={footerStyle}>
      <p>&copy; {currentYear} Alish AutoRent. Все права защищены.</p>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: "#000000", 
  color: "white",
  textAlign: "center",
  padding: "20px",
};

const listStyle = {
  listStyleType: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  justifyContent: "center",
  gap: "15px",
};

const linkStyle = {
  color: "#61dafb",
  textDecoration: "none",
};

export default Footer;