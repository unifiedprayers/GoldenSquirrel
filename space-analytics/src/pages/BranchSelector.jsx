import { branches } from "../data/mockData";

export default function BranchSelector({ onSelectBranch }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: 24,
        backgroundColor: "#020617",
        color: "#e5e7eb",
        fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: 16, textAlign: "center" }}>
        CCTV-Powered Analytics
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: 40, textAlign: "center", opacity: 0.8 }}>
        Computer vision insights for store optimization
      </p>

      <div
        style={{
          display: "flex",
          gap: 20,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {Object.keys(branches).map((branch) => (
          <button
            key={branch}
            onClick={() => onSelectBranch(branch)}
            style={{
              padding: "20px 30px",
              fontSize: "1.1rem",
              fontWeight: "bold",
              border: "2px solid #646cff",
              borderRadius: "12px",
              backgroundColor: "transparent",
              color: "#e5e7eb",
              cursor: "pointer",
              transition: "all 0.3s ease",
              minWidth: "250px",
              textAlign: "center",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#646cff";
              e.target.style.color = "#020617";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#e5e7eb";
            }}
          >
            {branch}
          </button>
        ))}
      </div>

      <p style={{ marginTop: 40, fontSize: "0.9rem", opacity: 0.6, textAlign: "center" }}>
        Movement, flow, and space efficiency insights
      </p>
    </div>
  );
}
