function Footer() {
  return (
    <footer
      style={{
        padding: "40px",
        textAlign: "center",
        borderTop: "1px solid #eee",
        marginTop: "80px",
        color: "#666",
        fontSize: "14px"
      }}
    >
      <p>
        As an Amazon Associate I earn from qualifying purchases.
      </p>

      <p style={{ marginTop: "8px" }}>
        © {new Date().getFullYear()} Pets Paw. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
