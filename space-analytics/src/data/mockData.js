// src/data/mockData.js

// 1️⃣ Foot Traffic
export const footTraffic = {
  totalVisitors: 1243,
  peakHour: "17:00 - 18:00",
  avgVisitDuration: 18, // minutes
  repeatVisitors: 432,
  newVisitors: 811,
};

// Visitors per hour (for line chart)
export const visitorsByHour = [
  { hour: "09:00", count: 40 },
  { hour: "10:00", count: 85 },
  { hour: "11:00", count: 120 },
  { hour: "12:00", count: 200 },
  { hour: "13:00", count: 180 },
  { hour: "14:00", count: 140 },
  { hour: "15:00", count: 170 },
  { hour: "16:00", count: 210 },
  { hour: "17:00", count: 250 },
];

// 2️⃣ Checkout & Sales Efficiency
export const checkoutStats = {
  avgCheckoutTime: 3, // minutes
  avgQueueLength: 5,
  cashierIdleTime: 45, // minutes
  transactionsPerHour: [15, 30, 45, 50, 60, 55, 50, 70, 80],
  abandonedBaskets: 12,
};

// 3️⃣ Product Engagement / Shelf Analytics
export const productEngagement = [
  { product: "Apples", picked: 120, purchased: 110, dwellTime: 30 },
  { product: "Bread", picked: 80, purchased: 60, dwellTime: 25 },
  { product: "Chocolate", picked: 50, purchased: 30, dwellTime: 20 },
  { product: "Milk", picked: 90, purchased: 85, dwellTime: 15 },
];

// 4️⃣ Pathing & Heatmap
export const heatmapPoints = [
  { xPercent: 20, yPercent: 50, value: 30 },
  { xPercent: 40, yPercent: 60, value: 80 },
  { xPercent: 60, yPercent: 25, value: 60 },
  { xPercent: 80, yPercent: 10, value: 50 },
];

// 5️⃣ Conversion Metrics
export const conversionMetrics = {
  visits: 1243,
  purchases: 978,
  avgBasketSize: 6,
  revenuePerVisitor: 15.2, // dollars
  promotionEffectiveness: 0.18, // 18%
};

// 6️⃣ Operational Metrics
export const operationalMetrics = {
  stockouts: 12,
  restockFrequency: 3, // per day
  shrinkage: 1.2, // % of inventory lost
  staffCoverage: 95, // % coverage vs ideal
};

// 7️⃣ Customer Experience
export const customerExperience = {
  crowdDensity: 0.6, // 0–1 scale
  accidentSpots: 2,
  temperatureComfort: 0.85, // 0–1 scale
};
