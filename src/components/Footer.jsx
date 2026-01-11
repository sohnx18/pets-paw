function Footer() {
  return (
    <footer
      style={{
        marginTop: "80px",
        padding: "40px",
        textAlign: "center",
        borderTop: "1px solid #eee",
        color: "#555",
        fontSize: "14px"
      }}
    >
      <p>© {new Date().getFullYear()} Pets Paw 🐾</p>

      <p style={{ marginTop: "10px", maxWidth: "600px", marginInline: "auto" }}>
        As an Amazon Associate, Pets Paw earns from qualifying purchases. 
        We only recommend products we believe are helpful for pet owners.
      </p>
    </footer>
  )
}

export default Footer
