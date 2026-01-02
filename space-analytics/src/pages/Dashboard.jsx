import KPICard from "../components/KPICard";
import EntranceChart from "../components/EntranceChart";
import Heatmap from "../components/Heatmap";
import VisitorsChart from "../components/VisitorsChart";
import CustomerJourneyChart from "../components/CustomerJourneyChart";
import RealTimeKPIDashboard from "../components/RealTimeKPIDashboard";
import OperationalAlertsDashboard from "../components/OperationalAlertsDashboard";
import PredictiveChart from "../components/PredictiveChart";

import { branches } from "../data/mockData";

export default function Dashboard({ selectedBranch, onBack }) {
  const branchData = branches[selectedBranch];

  return (
    <div className="dashboard" style={{ padding: 24 }}>
      <button
        onClick={onBack}
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          padding: "8px 16px",
          backgroundColor: "#646cff",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "bold",
          zIndex: 1000,
        }}
      >
        Back to Branches
      </button>
      <header className="header">
        <h1>CCTV-Powered Space Analytics - {selectedBranch}</h1>
        <p>Computer vision insights for store optimization</p>
      </header>

      {/* --- OLD KPI SECTION --- */}
      <section className="kpi-row" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        <KPICard title="Visitors Today" value={branchData.footTraffic.totalVisitors} />
        <KPICard title="Avg Visit Time" value={branchData.footTraffic.avgVisitDuration + " min"} />
        <KPICard title="Busiest Hour" value={branchData.footTraffic.peakHour} />
        <KPICard title="Cold Zone" value="Zone C" /> {/* Placeholder since your old kpis had coldestZone */}
      </section>

      {/* --- NEW SECTIONS --- */}

      {/* Visitors Chart */}
      <section style={{ marginTop: 40 }}>
        <h2>Visitors by Hour</h2>
        <VisitorsChart data={branchData.visitorsByHour} />
      </section>



      {/* Customer Journey Insights */}
      <section style={{ marginTop: 40 }}>
        <h2>🛣️ Customer Journey Analytics</h2>
        <CustomerJourneyChart data={branchData.customerJourney} />
      </section>

      {/* Real-time KPIs & Alerts */}
      <section style={{ marginTop: 40 }}>
        <h2>📊 Live Store Operations</h2>
        <RealTimeKPIDashboard data={branchData.realTimeKPIs} />
      </section>



      {/* Real-Time Operational Alerts */}
      <section style={{ marginTop: 40 }}>
        <h2>� Real-Time Operational Alerts</h2>
        <OperationalAlertsDashboard data={branchData.operationalAlerts} />
      </section>

      {/* Predictive Analytics & AI Insights */}
      <section style={{ marginTop: 40 }}>
        <h2>� AI-Powered Insights</h2>
        <PredictiveChart data={branchData.predictiveInsights} />
      </section>

      {/* Store Layout Heatmap */}
      <section style={{ marginTop: 40 }}>
        <h2>�️ Customer Movement Heatmap</h2>
        <Heatmap points={branchData.heatmapPoints} />
      </section>
    </div>
  );
}
