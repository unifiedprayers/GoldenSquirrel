// src/data/mockData.js

// Mock data for multiple branches
export const branches = {
  "Spinneys Sahel Alma": {
    // 1️⃣ Foot Traffic
    footTraffic: {
      totalVisitors: 1243,
      peakHour: "17:00 - 18:00",
      avgVisitDuration: 18, // minutes
      repeatVisitors: 432,
      newVisitors: 811,
    },
    // Visitors per hour (for line chart)
    visitorsByHour: [
      { hour: "09:00", count: 40 },
      { hour: "10:00", count: 85 },
      { hour: "11:00", count: 120 },
      { hour: "12:00", count: 200 },
      { hour: "13:00", count: 180 },
      { hour: "14:00", count: 140 },
      { hour: "15:00", count: 170 },
      { hour: "16:00", count: 210 },
      { hour: "17:00", count: 250 },
    ],
    // 2️⃣ Checkout & Sales Efficiency
    checkoutStats: {
      avgCheckoutTime: 3, // minutes
      avgQueueLength: 5,
      cashierIdleTime: 45, // minutes
      transactionsPerHour: [15, 30, 45, 50, 60, 55, 50, 70, 80],
      abandonedBaskets: 12,
    },
    // 3️⃣ Product Engagement / Shelf Analytics
    productEngagement: [
      { product: "Apples", picked: 120, purchased: 110, dwellTime: 30 },
      { product: "Bread", picked: 80, purchased: 60, dwellTime: 25 },
      { product: "Chocolate", picked: 50, purchased: 30, dwellTime: 20 },
      { product: "Milk", picked: 90, purchased: 85, dwellTime: 15 },
    ],
    // 4️⃣ Pathing & Heatmap
    heatmapPoints: [
      { xPercent: 20, yPercent: 50, value: 30 },
      { xPercent: 40, yPercent: 60, value: 80 },
      { xPercent: 60, yPercent: 25, value: 60 },
      { xPercent: 80, yPercent: 10, value: 50 },
    ],
    // 5️⃣ Conversion Metrics
    conversionMetrics: {
      visits: 1243,
      purchases: 978,
      avgBasketSize: 6,
      revenuePerVisitor: 15.2, // dollars
      promotionEffectiveness: 0.18, // 18%
    },
    // 6️⃣ Operational Metrics
    operationalMetrics: {
      stockouts: 12,
      restockFrequency: 3, // per day
      shrinkage: 1.2, // % of inventory lost
      staffCoverage: 95, // % coverage vs ideal
    },
    // 7️⃣ Customer Experience
    customerExperience: {
      crowdDensity: 0.6, // 0–1 scale
      accidentSpots: 2,
      temperatureComfort: 0.85, // 0–1 scale
    },
    // 8️⃣ Revenue & Conversion Metrics
    revenueMetrics: {
      conversionRate: 0.78, // 78% of visitors make purchases
      avgBasketSize: 6,
      revenuePerVisitor: 15.2,
      revenuePerSqFt: 45.8, // dollars per square foot
      totalRevenue: 29376, // daily revenue
      trafficToSalesRatio: 0.82, // sales per visitor ratio
    },
    // 9️⃣ Operational Efficiency
    operationalEfficiency: {
      avgCheckoutTime: 3, // minutes
      avgQueueLength: 5,
      peakHourCapacity: 85, // % of optimal capacity
      staffingEfficiency: 92, // % optimal staffing
      inventoryTurnover: 12, // times per year
      shrinkageRate: 1.2, // % of inventory lost
    },
    // 10️⃣ Customer Journey & Behavior
    customerJourney: {
      avgDwellTime: 22, // minutes
      abandonmentRate: 0.12, // 12% cart abandonment
      highEngagementZones: [
        { zone: "Produce", dwellTime: 8.5, conversion: 0.85 },
        { zone: "Dairy", dwellTime: 6.2, conversion: 0.78 },
        { zone: "Bakery", dwellTime: 7.1, conversion: 0.82 },
        { zone: "Checkout", dwellTime: 4.3, conversion: 0.95 },
      ],
      customerFlow: [
        { from: "Entrance", to: "Produce", flow: 85 },
        { from: "Produce", to: "Dairy", flow: 72 },
        { from: "Dairy", to: "Bakery", flow: 58 },
        { from: "Bakery", to: "Checkout", flow: 89 },
      ],
    },
    // 11️⃣ Real-time KPIs
    realTimeKPIs: {
      currentVisitors: 87,
      activeQueues: 3,
      avgWaitTime: 2.8, // minutes
      staffUtilization: 78, // %
      alerts: [
        { type: "queue", message: "Checkout Line 2 > 5 people", severity: "warning" },
        { type: "staff", message: "Bakery understaffed", severity: "info" },
      ],
    },
    // 12️⃣ Predictive Analytics
    predictiveInsights: {
      predictedPeakHours: ["17:00-18:00", "12:00-13:00"],
      recommendedStaffing: [
        { hour: "09:00", recommended: 8, current: 7 },
        { hour: "12:00", recommended: 12, current: 10 },
        { hour: "17:00", recommended: 15, current: 13 },
      ],
      layoutOptimization: {
        highTrafficLowRevenue: ["Aisle 7", "End Cap B"],
        recommendedMoves: [
          { product: "Premium Items", from: "Back Wall", to: "Main Aisle" },
          { product: "Impulse Buys", from: "Side Wall", to: "Checkout Area" },
        ],
      },
    },
    // 13️⃣ Revenue per Square Foot by Zone
    zoneRevenueAnalytics: {
      totalStoreSqFt: 8500,
      zones: [
        { name: "Produce", sqFt: 1200, revenue: 8750, revenuePerSqFt: 7.29, footTraffic: 450, conversion: 0.82 },
        { name: "Dairy", sqFt: 800, revenue: 6200, revenuePerSqFt: 7.75, footTraffic: 380, conversion: 0.78 },
        { name: "Bakery", sqFt: 600, revenue: 4800, revenuePerSqFt: 8.00, footTraffic: 290, conversion: 0.85 },
        { name: "Meat", sqFt: 900, revenue: 7200, revenuePerSqFt: 8.00, footTraffic: 320, conversion: 0.79 },
        { name: "Checkout", sqFt: 400, revenue: 3200, revenuePerSqFt: 8.00, footTraffic: 480, conversion: 0.95 },
        { name: "Aisle 1-6", sqFt: 3200, revenue: 19200, revenuePerSqFt: 6.00, footTraffic: 1200, conversion: 0.72 },
        { name: "Frozen", sqFt: 700, revenue: 3500, revenuePerSqFt: 5.00, footTraffic: 250, conversion: 0.65 },
        { name: "End Caps", sqFt: 500, revenue: 3750, revenuePerSqFt: 7.50, footTraffic: 180, conversion: 0.88 },
      ],
      totalRevenue: 60600,
      overallRevenuePerSqFt: 7.13,
    },
    // 14️⃣ True Cost of Customer Wait Times
    waitTimeEconomics: {
      currentAvgWaitTime: 3.2, // minutes
      optimalWaitTime: 2.5, // minutes
      revenueLostPerMinute: 45.80, // dollars per minute of total wait time
      totalDailyWaitTime: 1560, // minutes across all customers
      totalRevenueLostDaily: 71448, // dollars
      customerAbandonmentRate: 0.15, // 15% abandon carts after 5+ min wait
      peakHourWaitCost: 28.50, // per minute during peak hours
      staffingOptimizationPotential: 18500, // annual savings from better staffing
    },
    // 15️⃣ Customer Journey Profitability
    journeyProfitability: {
      highValuePaths: [
        { path: "Entrance → Produce → Dairy → Checkout", frequency: 0.28, avgRevenue: 87.50, conversion: 0.89 },
        { path: "Entrance → Bakery → Meat → Checkout", frequency: 0.22, avgRevenue: 82.30, conversion: 0.91 },
        { path: "Entrance → Produce → Bakery → Checkout", frequency: 0.18, avgRevenue: 79.80, conversion: 0.87 },
        { path: "Entrance → End Cap → Aisles → Checkout", frequency: 0.15, avgRevenue: 65.40, conversion: 0.76 },
        { path: "Entrance → Quick Shop → Checkout", frequency: 0.17, avgRevenue: 34.20, conversion: 0.68 },
      ],
      impulsePurchaseZones: [
        { zone: "Checkout Counter", uplift: 0.15, avgRevenue: 8.50 },
        { zone: "End Cap Displays", uplift: 0.12, avgRevenue: 6.80 },
        { zone: "Bakery Counter", uplift: 0.18, avgRevenue: 12.20 },
        { zone: "Produce Entrance", uplift: 0.08, avgRevenue: 4.50 },
      ],
      productAdjacencyInsights: [
        { product: "Bread", adjacent: "Butter", lift: 0.23, additionalRevenue: 3.20 },
        { product: "Steak", adjacent: "Potatoes", lift: 0.19, additionalRevenue: 4.80 },
        { product: "Milk", adjacent: "Cereal", lift: 0.15, additionalRevenue: 2.90 },
        { product: "Coffee", adjacent: "Creamer", lift: 0.31, additionalRevenue: 5.60 },
      ],
    },
    // 16️⃣ Real-Time Operational Alerts
    operationalAlerts: {
      activeAlerts: [
        {
          id: 1,
          type: "queue",
          severity: "high",
          location: "Checkout Line 2",
          message: "Queue > 8 customers (threshold: 5)",
          duration: "12 minutes",
          impact: "$480 potential revenue loss",
          recommendation: "Open register 4"
        },
        {
          id: 2,
          type: "staffing",
          severity: "medium",
          location: "Produce Section",
          message: "Understaffed by 1 employee",
          duration: "25 minutes",
          impact: "15% service delay",
          recommendation: "Move employee from Dairy"
        },
        {
          id: 3,
          type: "inventory",
          severity: "low",
          location: "Aisle 3",
          message: "Premium Items running low",
          duration: "N/A",
          impact: "$120/hour lost sales",
          recommendation: "Restock within 30 minutes"
        }
      ],
      alertThresholds: {
        maxQueueLength: 5,
        minStaffingCoverage: 85,
        lowInventoryThreshold: 20,
      },
      recentActions: [
        { time: "14:32", action: "Opened register 3", result: "Queue cleared in 8 minutes" },
        { time: "13:45", action: "Restocked bakery items", result: "+$340 additional sales" },
        { time: "12:15", action: "Moved staff to checkout", result: "Reduced avg wait to 2.1 min" },
      ],
    },
    // 17️⃣ What-If Scenario Planning
    scenarioPlanning: {
      layoutScenarios: [
        {
          name: "Move Dairy to Main Aisle",
          description: "Relocate dairy from back wall to main traffic area",
          implementationCost: 15000,
          projectedRevenueIncrease: 0.08, // 8%
          paybackPeriod: 4.5, // months
          confidence: 0.82,
          risks: ["Temporary disruption", "Restocking challenges"]
        },
        {
          name: "Expand Checkout Area",
          description: "Add 2 self-checkout stations",
          implementationCost: 25000,
          projectedRevenueIncrease: 0.12, // 12%
          paybackPeriod: 6.8, // months
          confidence: 0.91,
          risks: ["Training costs", "Technical issues"]
        },
        {
          name: "Premium Product Showcase",
          description: "Create dedicated premium section",
          implementationCost: 35000,
          projectedRevenueIncrease: 0.15, // 15%
          paybackPeriod: 8.2, // months
          confidence: 0.76,
          risks: ["Cannibalization", "Price sensitivity"]
        }
      ],
      staffingScenarios: [
        {
          name: "AI-Optimized Staffing",
          currentAnnualCost: 485000,
          optimizedCost: 432000,
          savings: 53000, // 11% reduction
          serviceImpact: "+8% customer satisfaction",
          implementationTime: "2 weeks"
        },
        {
          name: "Peak Hour Surge Staffing",
          additionalCost: 18000, // annual
          revenueIncrease: 0.06, // 6%
          netBenefit: 45000,
          roi: 250 // %
        }
      ],
    },
  },
  "Spinneys Dbayeh": {
    // 1️⃣ Foot Traffic
    footTraffic: {
      totalVisitors: 987,
      peakHour: "16:00 - 17:00",
      avgVisitDuration: 22, // minutes
      repeatVisitors: 356,
      newVisitors: 631,
    },
    // Visitors per hour (for line chart)
    visitorsByHour: [
      { hour: "09:00", count: 30 },
      { hour: "10:00", count: 70 },
      { hour: "11:00", count: 100 },
      { hour: "12:00", count: 180 },
      { hour: "13:00", count: 160 },
      { hour: "14:00", count: 120 },
      { hour: "15:00", count: 150 },
      { hour: "16:00", count: 200 },
      { hour: "17:00", count: 220 },
    ],
    // 2️⃣ Checkout & Sales Efficiency
    checkoutStats: {
      avgCheckoutTime: 4, // minutes
      avgQueueLength: 7,
      cashierIdleTime: 35, // minutes
      transactionsPerHour: [12, 25, 40, 45, 55, 50, 45, 65, 75],
      abandonedBaskets: 8,
    },
    // 3️⃣ Product Engagement / Shelf Analytics
    productEngagement: [
      { product: "Apples", picked: 95, purchased: 90, dwellTime: 28 },
      { product: "Bread", picked: 70, purchased: 55, dwellTime: 22 },
      { product: "Chocolate", picked: 40, purchased: 25, dwellTime: 18 },
      { product: "Milk", picked: 75, purchased: 70, dwellTime: 12 },
    ],
    // 4️⃣ Pathing & Heatmap
    heatmapPoints: [
      { xPercent: 25, yPercent: 55, value: 35 },
      { xPercent: 45, yPercent: 65, value: 85 },
      { xPercent: 65, yPercent: 30, value: 65 },
      { xPercent: 85, yPercent: 15, value: 55 },
    ],
    // 5️⃣ Conversion Metrics
    conversionMetrics: {
      visits: 987,
      purchases: 789,
      avgBasketSize: 5,
      revenuePerVisitor: 13.8, // dollars
      promotionEffectiveness: 0.22, // 22%
    },
    // 6️⃣ Operational Metrics
    operationalMetrics: {
      stockouts: 8,
      restockFrequency: 4, // per day
      shrinkage: 0.9, // % of inventory lost
      staffCoverage: 92, // % coverage vs ideal
    },
    // 7️⃣ Customer Experience
    customerExperience: {
      crowdDensity: 0.5, // 0–1 scale
      accidentSpots: 1,
      temperatureComfort: 0.9, // 0–1 scale
    },
    // 8️⃣ Revenue & Conversion Metrics
    revenueMetrics: {
      conversionRate: 0.72, // 72% of visitors make purchases
      avgBasketSize: 5,
      revenuePerVisitor: 13.8,
      revenuePerSqFt: 38.2, // dollars per square foot
      totalRevenue: 22187, // daily revenue
      trafficToSalesRatio: 0.78, // sales per visitor ratio
    },
    // 9️⃣ Operational Efficiency
    operationalEfficiency: {
      avgCheckoutTime: 4, // minutes
      avgQueueLength: 7,
      peakHourCapacity: 82, // % of optimal capacity
      staffingEfficiency: 89, // % optimal staffing
      inventoryTurnover: 10, // times per year
      shrinkageRate: 0.9, // % of inventory lost
    },
    // 10️⃣ Customer Journey & Behavior
    customerJourney: {
      avgDwellTime: 25, // minutes
      abandonmentRate: 0.15, // 15% cart abandonment
      highEngagementZones: [
        { zone: "Produce", dwellTime: 9.2, conversion: 0.81 },
        { zone: "Dairy", dwellTime: 7.1, conversion: 0.74 },
        { zone: "Bakery", dwellTime: 8.3, conversion: 0.79 },
        { zone: "Checkout", dwellTime: 5.1, conversion: 0.92 },
      ],
      customerFlow: [
        { from: "Entrance", to: "Produce", flow: 78 },
        { from: "Produce", to: "Dairy", flow: 65 },
        { from: "Dairy", to: "Bakery", flow: 52 },
        { from: "Bakery", to: "Checkout", flow: 84 },
      ],
    },
    // 11️⃣ Real-time KPIs
    realTimeKPIs: {
      currentVisitors: 65,
      activeQueues: 4,
      avgWaitTime: 3.2, // minutes
      staffUtilization: 82, // %
      alerts: [
        { type: "queue", message: "Checkout Line 1 > 6 people", severity: "warning" },
        { type: "staff", message: "Produce understaffed", severity: "warning" },
      ],
    },
    // 12️⃣ Predictive Analytics
    predictiveInsights: {
      predictedPeakHours: ["16:00-17:00", "13:00-14:00"],
      recommendedStaffing: [
        { hour: "09:00", recommended: 6, current: 5 },
        { hour: "13:00", recommended: 10, current: 8 },
        { hour: "16:00", recommended: 13, current: 11 },
      ],
      layoutOptimization: {
        highTrafficLowRevenue: ["Aisle 5", "End Cap A"],
        recommendedMoves: [
          { product: "Premium Items", from: "Back Wall", to: "Main Aisle" },
          { product: "Impulse Buys", from: "Side Wall", to: "Checkout Area" },
        ],
      },
    },
    // 13️⃣ Revenue per Square Foot by Zone
    zoneRevenueAnalytics: {
      totalStoreSqFt: 7800,
      zones: [
        { name: "Produce", sqFt: 1100, revenue: 7420, revenuePerSqFt: 6.75, footTraffic: 380, conversion: 0.78 },
        { name: "Dairy", sqFt: 750, revenue: 5100, revenuePerSqFt: 6.80, footTraffic: 320, conversion: 0.74 },
        { name: "Bakery", sqFt: 550, revenue: 3960, revenuePerSqFt: 7.20, footTraffic: 240, conversion: 0.81 },
        { name: "Meat", sqFt: 800, revenue: 5840, revenuePerSqFt: 7.30, footTraffic: 280, conversion: 0.75 },
        { name: "Checkout", sqFt: 350, revenue: 2730, revenuePerSqFt: 7.80, footTraffic: 410, conversion: 0.92 },
        { name: "Aisle 1-6", sqFt: 2900, revenue: 16060, revenuePerSqFt: 5.54, footTraffic: 980, conversion: 0.68 },
        { name: "Frozen", sqFt: 650, revenue: 3120, revenuePerSqFt: 4.80, footTraffic: 210, conversion: 0.62 },
        { name: "End Caps", sqFt: 450, revenue: 3150, revenuePerSqFt: 7.00, footTraffic: 150, conversion: 0.83 },
      ],
      totalRevenue: 51380,
      overallRevenuePerSqFt: 6.59,
    },
    // 14️⃣ True Cost of Customer Wait Times
    waitTimeEconomics: {
      currentAvgWaitTime: 3.8, // minutes
      optimalWaitTime: 2.8, // minutes
      revenueLostPerMinute: 38.60, // dollars per minute of total wait time
      totalDailyWaitTime: 1840, // minutes across all customers
      totalRevenueLostDaily: 71024, // dollars
      customerAbandonmentRate: 0.18, // 18% abandon carts after 5+ min wait
      peakHourWaitCost: 32.20, // per minute during peak hours
      staffingOptimizationPotential: 22800, // annual savings from better staffing
    },
    // 15️⃣ Customer Journey Profitability
    journeyProfitability: {
      highValuePaths: [
        { path: "Entrance → Produce → Dairy → Checkout", frequency: 0.25, avgRevenue: 76.80, conversion: 0.85 },
        { path: "Entrance → Bakery → Meat → Checkout", frequency: 0.20, avgRevenue: 74.10, conversion: 0.87 },
        { path: "Entrance → Produce → Bakery → Checkout", frequency: 0.16, avgRevenue: 71.50, conversion: 0.83 },
        { path: "Entrance → End Cap → Aisles → Checkout", frequency: 0.18, avgRevenue: 58.90, conversion: 0.72 },
        { path: "Entrance → Quick Shop → Checkout", frequency: 0.21, avgRevenue: 31.60, conversion: 0.65 },
      ],
      impulsePurchaseZones: [
        { zone: "Checkout Counter", uplift: 0.13, avgRevenue: 7.20 },
        { zone: "End Cap Displays", uplift: 0.16, avgRevenue: 7.80 },
        { zone: "Bakery Counter", uplift: 0.15, avgRevenue: 10.80 },
        { zone: "Produce Entrance", uplift: 0.09, avgRevenue: 4.10 },
      ],
      productAdjacencyInsights: [
        { product: "Bread", adjacent: "Butter", lift: 0.21, additionalRevenue: 2.80 },
        { product: "Steak", adjacent: "Potatoes", lift: 0.17, additionalRevenue: 4.20 },
        { product: "Milk", adjacent: "Cereal", lift: 0.18, additionalRevenue: 3.10 },
        { product: "Coffee", adjacent: "Creamer", lift: 0.28, additionalRevenue: 4.90 },
      ],
    },
    // 16️⃣ Real-Time Operational Alerts
    operationalAlerts: {
      activeAlerts: [
        {
          id: 1,
          type: "queue",
          severity: "high",
          location: "Checkout Line 1",
          message: "Queue > 7 customers (threshold: 5)",
          duration: "15 minutes",
          impact: "$540 potential revenue loss",
          recommendation: "Open register 2"
        },
        {
          id: 2,
          type: "staffing",
          severity: "medium",
          location: "Bakery Section",
          message: "Understaffed by 1 employee",
          duration: "18 minutes",
          impact: "12% service delay",
          recommendation: "Move employee from Frozen"
        }
      ],
      alertThresholds: {
        maxQueueLength: 5,
        minStaffingCoverage: 85,
        lowInventoryThreshold: 20,
      },
      recentActions: [
        { time: "15:12", action: "Opened register 4", result: "Queue cleared in 6 minutes" },
        { time: "14:28", action: "Restocked dairy items", result: "+$280 additional sales" },
        { time: "13:05", action: "Moved staff to checkout", result: "Reduced avg wait to 2.4 min" },
      ],
    },
    // 17️⃣ What-If Scenario Planning
    scenarioPlanning: {
      layoutScenarios: [
        {
          name: "Expand Produce Section",
          description: "Increase organic produce display area",
          implementationCost: 12000,
          projectedRevenueIncrease: 0.06, // 6%
          paybackPeriod: 5.2, // months
          confidence: 0.79,
          risks: ["Space constraints", "Supplier availability"]
        },
        {
          name: "Add Self-Checkout Lanes",
          description: "Install 3 additional self-checkout stations",
          implementationCost: 22000,
          projectedRevenueIncrease: 0.09, // 9%
          paybackPeriod: 7.1, // months
          confidence: 0.88,
          risks: ["Technical maintenance", "Customer training"]
        }
      ],
      staffingScenarios: [
        {
          name: "AI-Optimized Staffing",
          currentAnnualCost: 412000,
          optimizedCost: 368000,
          savings: 44000, // 11% reduction
          serviceImpact: "+7% customer satisfaction",
          implementationTime: "2 weeks"
        },
        {
          name: "Weekend Surge Staffing",
          additionalCost: 15000, // annual
          revenueIncrease: 0.05, // 5%
          netBenefit: 32500,
          roi: 217 // %
        }
      ],
    },
  },
};

// For backward compatibility, export the first branch as default
export const footTraffic = branches["Spinneys Sahel Alma"].footTraffic;
export const visitorsByHour = branches["Spinneys Sahel Alma"].visitorsByHour;
export const checkoutStats = branches["Spinneys Sahel Alma"].checkoutStats;
export const productEngagement = branches["Spinneys Sahel Alma"].productEngagement;
export const heatmapPoints = branches["Spinneys Sahel Alma"].heatmapPoints;
export const conversionMetrics = branches["Spinneys Sahel Alma"].conversionMetrics;
export const operationalMetrics = branches["Spinneys Sahel Alma"].operationalMetrics;
export const customerExperience = branches["Spinneys Sahel Alma"].customerExperience;
