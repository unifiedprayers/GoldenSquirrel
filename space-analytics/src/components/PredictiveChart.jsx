import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function PredictiveChart({ data }) {
  // Staffing recommendations chart
  const staffingData = data.recommendedStaffing.map(item => ({
    ...item,
    gap: item.recommended - item.current,
  }));

  // Layout optimization insights
  const optimizationData = [
    {
      category: "High Traffic, Low Revenue",
      items: data.layoutOptimization.highTrafficLowRevenue.length,
      color: "#ef4444"
    },
    {
      category: "Recommended Moves",
      items: data.layoutOptimization.recommendedMoves.length,
      color: "#4ade80"
    }
  ];

  return (
    <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
      {/* Staffing Recommendations */}
      <div style={{ flex: 1, minWidth: 350 }}>
        <h4 style={{ marginBottom: 16, color: "#e5e7eb" }}>AI Staffing Recommendations</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={staffingData}>
            <CartesianGrid stroke="#1e293b" strokeDasharray="3 3" />
            <XAxis dataKey="hour" stroke="#cbd5e1" />
            <YAxis stroke="#cbd5e1" />
            <Tooltip
              formatter={(value, name, props) => {
                if (name === "current") return [`${value} staff`, "Current"];
                if (name === "recommended") return [`${value} staff`, "Recommended"];
                if (name === "gap") return [`${value > 0 ? '+' : ''}${value} staff`, "Gap"];
                return [value, name];
              }}
            />
            <Bar dataKey="current" fill="#60a5fa" name="current" radius={[2, 2, 0, 0]} />
            <Bar dataKey="recommended" fill="#4ade80" name="recommended" radius={[2, 2, 0, 0]} />
            <Bar dataKey="gap" fill="#f59e0b" name="gap" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <div style={{ marginTop: 12, fontSize: "14px", color: "#cbd5e1" }}>
          <div>📈 Peak hours predicted: {data.predictedPeakHours.join(", ")}</div>
          <div>🎯 Optimize staffing to reduce wait times by up to 40%</div>
        </div>
      </div>

      {/* Layout Optimization Insights */}
      <div style={{ flex: 1, minWidth: 300 }}>
        <h4 style={{ marginBottom: 16, color: "#e5e7eb" }}>Layout Optimization Insights</h4>

        {/* Optimization Stats */}
        <div style={{ display: "grid", gap: 12, marginBottom: 20 }}>
          {optimizationData.map((item, index) => (
            <div key={index} style={{
              backgroundColor: "#1e293b",
              padding: 16,
              borderRadius: 8,
              border: "1px solid #374151",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}>
              <div>
                <div style={{ color: "#e5e7eb", fontSize: "14px", fontWeight: "bold" }}>
                  {item.category}
                </div>
                <div style={{ color: "#cbd5e1", fontSize: "12px" }}>
                  {item.items} opportunities identified
                </div>
              </div>
              <div style={{
                color: item.color,
                fontSize: "24px",
                fontWeight: "bold"
              }}>
                {item.items}
              </div>
            </div>
          ))}
        </div>

        {/* Recommended Actions */}
        <div>
          <h5 style={{ color: "#e5e7eb", marginBottom: 12 }}>Recommended Actions</h5>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {data.layoutOptimization.recommendedMoves.map((move, index) => (
              <div key={index} style={{
                backgroundColor: "#374151",
                padding: 12,
                borderRadius: 6,
                borderLeft: "4px solid #4ade80"
              }}>
                <div style={{ color: "#e5e7eb", fontSize: "14px", fontWeight: "bold" }}>
                  Move {move.product}
                </div>
                <div style={{ color: "#cbd5e1", fontSize: "12px" }}>
                  {move.from} → {move.to}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* High Traffic Areas Alert */}
        {data.layoutOptimization.highTrafficLowRevenue.length > 0 && (
          <div style={{
            marginTop: 16,
            backgroundColor: "#451a03",
            border: "1px solid #f59e0b",
            padding: 12,
            borderRadius: 6
          }}>
            <div style={{ color: "#f59e0b", fontSize: "14px", fontWeight: "bold", marginBottom: 4 }}>
              ⚠️ Optimization Opportunity
            </div>
            <div style={{ color: "#cbd5e1", fontSize: "12px" }}>
              High traffic areas with low revenue: {data.layoutOptimization.highTrafficLowRevenue.join(", ")}
            </div>
          </div>
        )}
      </div>

      {/* Predictive ROI Summary */}
      <div style={{ flex: 1, minWidth: 250 }}>
        <h4 style={{ marginBottom: 16, color: "#e5e7eb" }}>Predicted Impact</h4>

        <div style={{ display: "grid", gap: 12 }}>
          <div style={{
            backgroundColor: "#1e293b",
            padding: 16,
            borderRadius: 8,
            border: "1px solid #374151"
          }}>
            <div style={{ color: "#cbd5e1", fontSize: "14px", marginBottom: 4 }}>Revenue Increase</div>
            <div style={{ color: "#4ade80", fontSize: "24px", fontWeight: "bold" }}>
              +12-18%
            </div>
            <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: 4 }}>
              from optimized layout
            </div>
          </div>

          <div style={{
            backgroundColor: "#1e293b",
            padding: 16,
            borderRadius: 8,
            border: "1px solid #374151"
          }}>
            <div style={{ color: "#cbd5e1", fontSize: "14px", marginBottom: 4 }}>Wait Time Reduction</div>
            <div style={{ color: "#4ade80", fontSize: "24px", fontWeight: "bold" }}>
              -35%
            </div>
            <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: 4 }}>
              during peak hours
            </div>
          </div>

          <div style={{
            backgroundColor: "#1e293b",
            padding: 16,
            borderRadius: 8,
            border: "1px solid #374151"
          }}>
            <div style={{ color: "#cbd5e1", fontSize: "14px", marginBottom: 4 }}>Staff Cost Savings</div>
            <div style={{ color: "#4ade80", fontSize: "24px", fontWeight: "bold" }}>
              -8%
            </div>
            <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: 4 }}>
              through better scheduling
            </div>
          </div>

          <div style={{
            backgroundColor: "#1e293b",
            padding: 16,
            borderRadius: 8,
            border: "1px solid #374151"
          }}>
            <div style={{ color: "#cbd5e1", fontSize: "14px", marginBottom: 4 }}>ROI Timeline</div>
            <div style={{ color: "#60a5fa", fontSize: "18px", fontWeight: "bold" }}>
              6 months
            </div>
            <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: 4 }}>
              to break even
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
