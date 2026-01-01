import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

export default function EntranceChart({ data }) {
  return (
    <div style={{ width: "100%", height: 300 }}> {/* IMPORTANT: fixed height */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
          <XAxis dataKey="hour" stroke="#cbd5e1" />
          <YAxis stroke="#cbd5e1" />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#4ade80" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
