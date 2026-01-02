export default function OperationalAlertsDashboard({ data }) {
  // Handle undefined data
  if (!data || !data.activeAlerts || !data.alertThresholds || !data.recentActions) {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 300,
        color: "#cbd5e1"
      }}>
        Loading operational alerts...
      </div>
    );
  }

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "high": return { bg: "#451a03", border: "#f59e0b", text: "#f59e0b" };
      case "medium": return { bg: "#451a03", border: "#f59e0b", text: "#f59e0b" };
      case "low": return { bg: "#1e293b", border: "#60a5fa", text: "#60a5fa" };
      default: return { bg: "#1e293b", border: "#6b7280", text: "#6b7280" };
    }
  };

  return (
    <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
      {/* Active Alerts */}
      <div style={{ flex: 1, minWidth: 400 }}>
        <h4 style={{ marginBottom: 16, color: "#e5e7eb" }}>
          Active Operational Alerts
          <span style={{ fontSize: "12px", color: "#cbd5e1", marginLeft: 8 }}>
            ({data.activeAlerts.length} active)
          </span>
        </h4>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {data.activeAlerts.length === 0 ? (
            <div style={{
              backgroundColor: "#1a2e1a",
              border: "1px solid #4ade80",
              padding: 24,
              borderRadius: 12,
              textAlign: "center"
            }}>
              <div style={{ fontSize: "48px", marginBottom: 12 }}>✅</div>
              <div style={{ color: "#4ade80", fontSize: "18px", fontWeight: "bold" }}>
                All Systems Operating Normally
              </div>
              <div style={{ color: "#cbd5e1", fontSize: "14px", marginTop: 8 }}>
                No critical alerts at this time
              </div>
            </div>
          ) : (
            data.activeAlerts.map((alert) => {
              const colors = getSeverityColor(alert.severity);
              return (
                <div key={alert.id} style={{
                  backgroundColor: colors.bg,
                  border: `2px solid ${colors.border}`,
                  borderRadius: 12,
                  padding: 16,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16
                }}>
                  {/* Alert Icon */}
                  <div style={{
                    fontSize: "24px",
                    minWidth: "24px",
                    textAlign: "center"
                  }}>
                    {alert.type === "queue" ? "👥" :
                     alert.type === "staffing" ? "👤" :
                     alert.type === "inventory" ? "📦" : "⚠️"}
                  </div>

                  {/* Alert Details */}
                  <div style={{ flex: 1 }}>
                    <div style={{
                      color: "#e5e7eb",
                      fontSize: "16px",
                      fontWeight: "bold",
                      marginBottom: 4
                    }}>
                      {alert.location}
                    </div>
                    <div style={{
                      color: "#cbd5e1",
                      fontSize: "14px",
                      marginBottom: 8
                    }}>
                      {alert.message}
                    </div>

                    {/* Impact & Duration */}
                    <div style={{ display: "flex", gap: 16, marginBottom: 8 }}>
                      <div style={{ color: "#ef4444", fontSize: "14px", fontWeight: "bold" }}>
                        Impact: {alert.impact}
                      </div>
                      {alert.duration && (
                        <div style={{ color: "#cbd5e1", fontSize: "14px" }}>
                          Duration: {alert.duration}
                        </div>
                      )}
                    </div>

                    {/* Recommendation */}
                    <div style={{
                      backgroundColor: "#374151",
                      padding: 8,
                      borderRadius: 6,
                      borderLeft: `4px solid ${colors.border}`
                    }}>
                      <div style={{ color: "#4ade80", fontSize: "12px", fontWeight: "bold", marginBottom: 2 }}>
                        RECOMMENDATION
                      </div>
                      <div style={{ color: "#e5e7eb", fontSize: "14px" }}>
                        {alert.recommendation}
                      </div>
                    </div>
                  </div>

                  {/* Severity Badge */}
                  <div style={{
                    backgroundColor: colors.border,
                    color: "#020617",
                    padding: "4px 8px",
                    borderRadius: 12,
                    fontSize: "10px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    alignSelf: "flex-start"
                  }}>
                    {alert.severity}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Alert Thresholds & Recent Actions */}
      <div style={{ flex: 1, minWidth: 300 }}>
        <h4 style={{ marginBottom: 16, color: "#e5e7eb" }}>Alert Settings & History</h4>

        {/* Threshold Settings */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ color: "#cbd5e1", fontSize: "14px", marginBottom: 12 }}>
            Alert Thresholds:
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            <div style={{
              backgroundColor: "#1e293b",
              padding: 12,
              borderRadius: 6,
              border: "1px solid #374151",
              display: "flex",
              justifyContent: "space-between"
            }}>
              <span style={{ color: "#cbd5e1" }}>Max Queue Length</span>
              <span style={{ color: "#4ade80", fontWeight: "bold" }}>{data.alertThresholds.maxQueueLength} people</span>
            </div>
            <div style={{
              backgroundColor: "#1e293b",
              padding: 12,
              borderRadius: 6,
              border: "1px solid #374151",
              display: "flex",
              justifyContent: "space-between"
            }}>
              <span style={{ color: "#cbd5e1" }}>Min Staffing Coverage</span>
              <span style={{ color: "#4ade80", fontWeight: "bold" }}>{data.alertThresholds.minStaffingCoverage}%</span>
            </div>
            <div style={{
              backgroundColor: "#1e293b",
              padding: 12,
              borderRadius: 6,
              border: "1px solid #374151",
              display: "flex",
              justifyContent: "space-between"
            }}>
              <span style={{ color: "#cbd5e1" }}>Low Inventory Alert</span>
              <span style={{ color: "#4ade80", fontWeight: "bold" }}>{data.alertThresholds.lowInventoryThreshold}% remaining</span>
            </div>
          </div>
        </div>

        {/* Recent Actions */}
        <div>
          <div style={{ color: "#cbd5e1", fontSize: "14px", marginBottom: 12 }}>
            Recent Actions Taken:
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {data.recentActions.map((action, index) => (
              <div key={index} style={{
                backgroundColor: "#1a2e1a",
                border: "1px solid #4ade80",
                padding: 12,
                borderRadius: 6
              }}>
                <div style={{ color: "#e5e7eb", fontSize: "14px", fontWeight: "bold", marginBottom: 4 }}>
                  {action.time}: {action.action}
                </div>
                <div style={{ color: "#4ade80", fontSize: "12px" }}>
                  Result: {action.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
