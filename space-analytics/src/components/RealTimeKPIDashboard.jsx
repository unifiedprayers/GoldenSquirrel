import { useState, useEffect } from "react";

export default function RealTimeKPIDashboard({ data }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getAlertColor = (severity) => {
    switch (severity) {
      case "warning": return "#f59e0b";
      case "error": return "#ef4444";
      default: return "#60a5fa";
    }
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case "queue": return "👥";
      case "staff": return "👤";
      default: return "⚠️";
    }
  };

  return (
    <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
      {/* Live Metrics Cards */}
      <div style={{ flex: 1, minWidth: 300 }}>
        <h4 style={{ marginBottom: 16, color: "#e5e7eb" }}>
          Live Store Metrics
          <span style={{ fontSize: "12px", color: "#cbd5e1", marginLeft: 8 }}>
            Last updated: {currentTime.toLocaleTimeString()}
          </span>
        </h4>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 16 }}>
          <div style={{
            backgroundColor: "#1e293b",
            padding: 20,
            borderRadius: 12,
            border: "1px solid #374151",
            textAlign: "center"
          }}>
            <div style={{ color: "#cbd5e1", fontSize: "14px", marginBottom: 8 }}>Current Visitors</div>
            <div style={{
              color: "#4ade80",
              fontSize: "32px",
              fontWeight: "bold",
              fontFamily: "monospace"
            }}>
              {data.currentVisitors}
            </div>
            <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: 4 }}>in store</div>
          </div>

          <div style={{
            backgroundColor: "#1e293b",
            padding: 20,
            borderRadius: 12,
            border: "1px solid #374151",
            textAlign: "center"
          }}>
            <div style={{ color: "#cbd5e1", fontSize: "14px", marginBottom: 8 }}>Active Queues</div>
            <div style={{
              color: data.activeQueues > 4 ? "#ef4444" : "#4ade80",
              fontSize: "32px",
              fontWeight: "bold",
              fontFamily: "monospace"
            }}>
              {data.activeQueues}
            </div>
            <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: 4 }}>checkout lines</div>
          </div>

          <div style={{
            backgroundColor: "#1e293b",
            padding: 20,
            borderRadius: 12,
            border: "1px solid #374151",
            textAlign: "center"
          }}>
            <div style={{ color: "#cbd5e1", fontSize: "14px", marginBottom: 8 }}>Avg Wait Time</div>
            <div style={{
              color: data.avgWaitTime > 3 ? "#f59e0b" : "#4ade80",
              fontSize: "32px",
              fontWeight: "bold",
              fontFamily: "monospace"
            }}>
              {data.avgWaitTime.toFixed(1)}
            </div>
            <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: 4 }}>minutes</div>
          </div>

          <div style={{
            backgroundColor: "#1e293b",
            padding: 20,
            borderRadius: 12,
            border: "1px solid #374151",
            textAlign: "center"
          }}>
            <div style={{ color: "#cbd5e1", fontSize: "14px", marginBottom: 8 }}>Staff Utilization</div>
            <div style={{
              color: data.staffUtilization > 80 ? "#4ade80" : "#f59e0b",
              fontSize: "32px",
              fontWeight: "bold",
              fontFamily: "monospace"
            }}>
              {data.staffUtilization}%
            </div>
            <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: 4 }}>active</div>
          </div>
        </div>
      </div>

      {/* Alerts Panel */}
      <div style={{ flex: 1, minWidth: 250 }}>
        <h4 style={{ marginBottom: 16, color: "#e5e7eb" }}>Active Alerts</h4>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {data.alerts.length === 0 ? (
            <div style={{
              backgroundColor: "#1e293b",
              padding: 20,
              borderRadius: 12,
              border: "1px solid #374151",
              textAlign: "center",
              color: "#4ade80"
            }}>
              ✅ All systems operating normally
            </div>
          ) : (
            data.alerts.map((alert, index) => (
              <div key={index} style={{
                backgroundColor: "#1e293b",
                padding: 16,
                borderRadius: 8,
                border: `2px solid ${getAlertColor(alert.severity)}`,
                display: "flex",
                alignItems: "center",
                gap: 12
              }}>
                <div style={{ fontSize: "24px" }}>
                  {getAlertIcon(alert.type)}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    color: "#e5e7eb",
                    fontSize: "14px",
                    fontWeight: "bold",
                    marginBottom: 2
                  }}>
                    {alert.message}
                  </div>
                  <div style={{
                    color: getAlertColor(alert.severity),
                    fontSize: "12px",
                    textTransform: "uppercase",
                    fontWeight: "bold"
                  }}>
                    {alert.severity}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Quick Actions */}
        <div style={{ marginTop: 20 }}>
          <h4 style={{ marginBottom: 12, color: "#e5e7eb" }}>Quick Actions</h4>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <button style={{
              padding: "8px 12px",
              backgroundColor: "#4ade80",
              color: "#020617",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: "bold"
            }}>
              Open Extra Register
            </button>
            <button style={{
              padding: "8px 12px",
              backgroundColor: "#60a5fa",
              color: "#020617",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: "bold"
            }}>
              Call Staff Backup
            </button>
            <button style={{
              padding: "8px 12px",
              backgroundColor: "#f59e0b",
              color: "#020617",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: "bold"
            }}>
              Send Alert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
