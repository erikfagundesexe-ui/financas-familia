export default function Home() {
  const financeData = {
    saldo: 1899.57,
    receitas: 7735.03,
    despesas: 5835.46,
    reserva: 1614.43,
  };

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

      <div style={{ marginBottom: "30px" }}>
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

      {/* TOPO */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        {/* SALDO */}

        <div
          style={{
            background:
              "linear-gradient(135deg,#7C3AED,#4F46E5)",
            borderRadius: "24px",
            padding: "32px",
          }}
        >
          <p>Saldo Disponível</p>

          <h2
            style={{
              fontSize: "64px",
              marginTop: "12px",
            }}
          >
            R$ {financeData.saldo.toLocaleString("pt-BR")}
          </h2>

          <p style={{ marginTop: "10px" }}>
            +12% em relação ao mês anterior
          </p>
        </div>

        {/* META */}

        <div
          style={{
            background: "#18181B",
            borderRadius: "24px",
            padding: "24px",
          }}
        >
          <h3>🎯 Meta Principal</h3>

          <p
            style={{
              color: "#A1A1AA",
              marginTop: "10px",
            }}
          >
            Reserva de Emergência
          </p>

          <div
            style={{
              width: "100%",
              height: "16px",
              background: "#27272A",
              borderRadius: "999px",
              marginTop: "16px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "16%",
                height: "100%",
                background: "#8B5CF6",
              }}
            />
          </div>

          <p
            style={{
              marginTop: "12px",
              color: "#8B5CF6",
            }}
          >
            16% concluído
          </p>
        </div>
      </div>

      {/* KPI */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            background: "#18181B",
            padding: "24px",
            borderRadius: "20px",
          }}
        >
          <p style={{ color: "#A1A1AA" }}>
            💰 Receitas
          </p>

          <h2
            style={{
              color: "#22C55E",
              marginTop: "8px",
            }}
          >
            R$ {financeData.receitas.toLocaleString("pt-BR")}
          </h2>
        </div>

        <div
          style={{
            background: "#18181B",
            padding: "24px",
            borderRadius: "20px",
          }}
        >
          <p style={{ color: "#A1A1AA" }}>
            💸 Despesas
          </p>

          <h2
            style={{
              color: "#EF4444",
              marginTop: "8px",
            }}
          >
            R$ {financeData.despesas.toLocaleString("pt-BR")}
          </h2>
        </div>

        <div
          style={{
            background: "#18181B",
            padding: "24px",
            borderRadius: "20px",
          }}
        >
          <p style={{ color: "#A1A1AA" }}>
            🏦 Reserva
          </p>

          <h2
            style={{
              color: "#8B5CF6",
              marginTop: "8px",
            }}
          >
            R$ {financeData.reserva.toLocaleString("pt-BR")}
          </h2>
        </div>
      </div>

      {/* CONTEÚDO INFERIOR */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
        }}
      >
        {/* GRÁFICO */}

        <div
          style={{
            background: "#18181B",
            borderRadius: "24px",
            padding: "24px",
          }}
        >
          <h3>📈 Evolução Financeira</h3>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: "20px",
              height: "260px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                width: "70px",
                height: "80px",
                background: "#6D28D9",
                borderRadius: "12px 12px 0 0",
              }}
            />

            <div
              style={{
                width: "70px",
                height: "120px",
                background: "#6D28D9",
                borderRadius: "12px 12px 0 0",
              }}
            />

            <div
              style={{
                width: "70px",
                height: "150px",
                background: "#6D28D9",
                borderRadius: "12px 12px 0 0",
              }}
            />

            <div
              style={{
                width: "70px",
                height: "190px",
                background: "#6D28D9",
                borderRadius: "12px 12px 0 0",
              }}
            />

            <div
              style={{
                width: "70px",
                height: "230px",
                background:
                  "linear-gradient(180deg,#8B5CF6,#4F46E5)",
                borderRadius: "12px 12px 0 0",
              }}
            />
          </div>
        </div>

        {/* CONTAS */}

        <div
          style={{
            background: "#18181B",
            borderRadius: "24px",
            padding: "24px",
          }}
        >
          <h3>📅 Próximas Contas</h3>

          <div style={{ marginTop: "20px" }}>
            <p>Aluguel - R$ 1.590</p>

            <p style={{ marginTop: "10px" }}>
              Internet - R$ 150
            </p>

            <p style={{ marginTop: "10px" }}>
              Empréstimo - R$ 570
            </p>

            <p style={{ marginTop: "10px" }}>
              Dívida Erik - R$ 380
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}