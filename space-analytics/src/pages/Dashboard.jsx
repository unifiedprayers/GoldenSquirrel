import KPICard from "../components/KPICard";
import EntranceChart from "../components/EntranceChart";
import Heatmap from "../components/Heatmap";
import TransactionsChart from "../components/TransactionsChart";
import VisitorsChart from "../components/VisitorsChart";

import {
  footTraffic,
  visitorsByHour,
  checkoutStats,
  productEngagement,
  heatmapPoints,
  conversionMetrics,
  operationalMetrics,
  customerExperience,
} from "../data/mockData";

export default function Dashboard() {
  return (
    <div className="dashboard" style={{ padding: 24 }}>
      <header className="header">
        <h1>Physical Space Analytics</h1>
        <p>Movement, flow, and space efficiency insights</p>
      </header>

      {/* --- OLD KPI SECTION --- */}
      <section className="kpi-row" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        <KPICard title="Visitors Today" value={footTraffic.totalVisitors} />
        <KPICard title="Avg Visit Time" value={footTraffic.avgVisitDuration + " min"} />
        <KPICard title="Busiest Hour" value={footTraffic.peakHour} />
        <KPICard title="Cold Zone" value="Zone C" /> {/* Placeholder since your old kpis had coldestZone */}
      </section>

      {/* --- NEW SECTIONS --- */}

      {/* Visitors Chart */}
      <section style={{ marginTop: 40 }}>
        <h2>Visitors by Hour</h2>
        <VisitorsChart data={visitorsByHour} />
      </section>

      {/* Checkout & Transactions */}
      <section style={{ marginTop: 40 }}>
        <h2>Checkout & Transactions</h2>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 16 }}>
          <KPICard title="Avg Checkout Time" value={checkoutStats.avgCheckoutTime + " min"} />
          <KPICard title="Avg Queue Length" value={checkoutStats.avgQueueLength} />
          <KPICard title="Cashier Idle Time" value={checkoutStats.cashierIdleTime + " min"} />
          <KPICard title="Abandoned Baskets" value={checkoutStats.abandonedBaskets} />
        </div>
        <TransactionsChart data={checkoutStats.transactionsPerHour} />
      </section>

      {/* Product Engagement */}
      <section style={{ marginTop: 40 }}>
        <h2>Product Engagement</h2>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {productEngagement.map((p, i) => (
            <KPICard
              key={i}
              title={p.product}
              value={`Picked: ${p.picked} | Bought: ${p.purchased} | Dwell: ${p.dwellTime} min`}
            />
          ))}
        </div>
      </section>

      {/* Conversion Metrics */}
      <section style={{ marginTop: 40 }}>
        <h2>Conversion Metrics</h2>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <KPICard
            title="Conversion Rate"
            value={((conversionMetrics.purchases / conversionMetrics.visits) * 100).toFixed(1) + "%"}
          />
          <KPICard title="Avg Basket Size" value={conversionMetrics.avgBasketSize} />
          <KPICard title="Revenue per Visitor" value={`$${conversionMetrics.revenuePerVisitor}`} />
          <KPICard
            title="Promotion Effectiveness"
            value={`${(conversionMetrics.promotionEffectiveness * 100).toFixed(1)}%`}
          />
        </div>
      </section>

      {/* Operational Metrics */}
      <section style={{ marginTop: 40 }}>
        <h2>Operational Metrics</h2>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <KPICard title="Stockouts" value={operationalMetrics.stockouts} />
          <KPICard title="Shrinkage" value={`${operationalMetrics.shrinkage}%`} />
          <KPICard title="Staff Coverage" value={`${operationalMetrics.staffCoverage}%`} />
        </div>
      </section>

      {/* Customer Experience Metrics */}
      <section style={{ marginTop: 40, marginBottom: 40 }}>
        <h2>Customer Experience</h2>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <KPICard title="Crowd Density" value={`${(customerExperience.crowdDensity * 100).toFixed(0)}%`} />
          <KPICard title="Accident Spots" value={customerExperience.accidentSpots} />
          <KPICard
            title="Temperature Comfort"
            value={`${(customerExperience.temperatureComfort * 100).toFixed(0)}%`}
          />
        </div>
      </section>
    </div>
  );
}
