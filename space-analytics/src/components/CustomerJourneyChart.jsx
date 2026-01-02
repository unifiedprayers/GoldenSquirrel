import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function CustomerJourneyChart({ data }) {
  // Handle undefined data
  if (!data || !data.highEngagementZones || !data.customerFlow) {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 300,
        color: "#cbd5e1"
      }}>
        Loading journey data...
      </div>
    );
  }

  // Data for zone engagement bar chart
  const zoneData = data.highEngagementZones.map(zone => ({
    zone: zone.zone,
    dwellTime: zone.dwellTime,
    conversion: zone.conversion * 100,
  }));

  // Simplified flow data for Sankey-style visualization (using bar chart as approximation)
  const flowData = data.customerFlow.map(flow => ({
    path: `${flow.from} → ${flow.to}`,
    flow: flow.flow,
  }));

  return (
    <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
      {/* Zone Engagement Chart */}
      <div style={{ flex: 1, minWidth: 300 }}>
        <h4 style={{ marginBottom: 16, color: "#e5e7eb" }}>Zone Engagement Analysis</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={zoneData}>
            <CartesianGrid stroke="#1e293b" strokeDasharray="3 3" />
            <XAxis dataKey="zone" stroke="#cbd5e1" />
            <YAxis yAxisId="left" orientation="left" stroke="#4ade80" />
            <YAxis yAxisId="right" orientation="right" stroke="#60a5fa" />
            <Tooltip
              formatter={(value, name) => {
                if (name === "dwellTime") return [`${value} min`, "Avg Dwell Time"];
                if (name === "conversion") return [`${value.toFixed(1)}%`, "Conversion Rate"];
                return [value, name];
              }}
            />
            <Bar yAxisId="left" dataKey="dwellTime" fill="#4ade80" name="dwellTime" radius={[2, 2, 0, 0]} />
            <Bar yAxisId="right" dataKey="conversion" fill="#60a5fa" name="conversion" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Customer Flow Chart */}
      <div style={{ flex: 1, minWidth: 300 }}>
        <h4 style={{ marginBottom: 16, color: "#e5e7eb" }}>Customer Flow Patterns</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={flowData} layout="horizontal">
            <CartesianGrid stroke="#1e293b" strokeDasharray="3 3" />
            <XAxis type="number" stroke="#cbd5e1" />
            <YAxis dataKey="path" type="category" stroke="#cbd5e1" width={120} />
            <Tooltip formatter={(value) => [`${value}%`, "Flow Rate"]} />
            <Bar dataKey="flow" fill="#f59e0b" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Key Journey Metrics */}
      <div style={{ flex: 1, minWidth: 250 }}>
        <h4 style={{ marginBottom: 16, color: "#e5e7eb" }}>Journey Insights</h4>
        <div style={{ display: "grid", gap: 12 }}>
          <div style={{
            backgroundColor: "#1e293b",
            padding: 16,
            borderRadius: 8,
            border: "1px solid #374151"
          }}>
            <div style={{ color: "#cbd5e1", fontSize: "14px", marginBottom: 4 }}>Avg Visit Duration</div>
            <div style={{ color: "#4ade80", fontSize: "24px", fontWeight: "bold" }}>
              {data.avgDwellTime} min
            </div>
          </div>

          <div style={{
            backgroundColor: "#1e293b",
            padding: 16,
            borderRadius: 8,
            border: "1px solid #374151"
          }}>
            <div style={{ color: "#cbd5e1", fontSize: "14px", marginBottom: 4 }}>Cart Abandonment</div>
            <div style={{ color: data.abandonmentRate < 0.15 ? "#4ade80" : "#ef4444", fontSize: "24px", fontWeight: "bold" }}>
              {(data.abandonmentRate * 100).toFixed(1)}%
            </div>
          </div>

          <div style={{
            backgroundColor: "#1e293b",
            padding: 16,
            borderRadius: 8,
            border: "1px solid #374151"
          }}>
            <div style={{ color: "#cbd5e1", fontSize: "14px", marginBottom: 4 }}>Top Performing Zone</div>
            <div style={{ color: "#60a5fa", fontSize: "18px", fontWeight: "bold" }}>
              {data.highEngagementZones.reduce((max, zone) =>
                zone.conversion > max.conversion ? zone : max
              ).zone}
            </div>
            <div style={{ color: "#cbd5e1", fontSize: "12px", marginTop: 4 }}>
              {(data.highEngagementZones.reduce((max, zone) =>
                zone.conversion > max.conversion ? zone : max
              ).conversion * 100).toFixed(1)}% conversion
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
