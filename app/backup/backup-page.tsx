export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#09090B",
        color: "white",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      {/* HEADER */}

      <div style={{ marginBottom: "40px" }}>
        <h1
          style={{
            fontSize: "42px",
            fontWeight: "bold",
          }}
        >
          Boa noite, Erik 👋
        </h1>

        <p
          style={{
            color: "#A1A1AA",
            marginTop: "10px",
          }}
        >
          Bem-vindo ao seu painel financeiro
        </p>
      </div>

      {/* SALDO */}

      <div
        style={{
          background:
            "linear-gradient(135deg,#7C3AED,#4F46E5)",
          borderRadius: "24px",
          padding: "32px",
          marginBottom: "24px",
        }}
      >
        <p>Saldo Disponível</p>

        <h2
          style={{
            fontSize: "64px",
            marginTop: "12px",
          }}
        >
          R$ 1.899,57
        </h2>

        <p style={{