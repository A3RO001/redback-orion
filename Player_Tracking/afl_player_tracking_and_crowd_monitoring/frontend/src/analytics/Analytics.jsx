import React from "react";
import PlayerCardFront from "../components/PlayerCardFront";
import PlayerCardBack from "../components/PlayerCardBack";
import { PossessionChart, MetricsChart } from "../components/PlayerCharts"; // FIX
import "./analystics.css";

const Analytics = () => {
  const statData = [
    { label: "Goals", value: 12, delta: +1 },
    { label: "Assists", value: 8, delta: 0 },
    { label: "Tackles", value: 20, delta: -2 },
    { label: "Disposals", value: 30, delta: +3 },
  ];

  return (
    <div className="analytics-page">
      {/* Player Cards */}
      <div className="cards-grid justify-center">
        <div className="card-wrap flex justify-center">
          <PlayerCardFront />
        </div>
        <div className="card-wrap flex justify-center">
          <PlayerCardBack />
        </div>
      </div>

      {/* Stat Boxes */}
      <div className="stat-row">
        {/* FIX: this is 4 columns in CSS now */}
        {statData.map(({ label, value, delta }) => {
          const deltaClass =
            delta > 0
              ? "statbox-delta positive"
              : delta < 0
              ? "statbox-delta negative" // FIX: new .negative style in CSS
              : "statbox-delta";
          const sign = delta > 0 ? "+" : ""; // show + for positives
          return (
            <div key={label} className="statbox">
              <div className="statbox-label">{label}</div>
              <div className="statbox-value">{value}</div>
              <div className={deltaClass}>{`${sign}${delta}`}</div>
            </div>
          );
        })}
      </div>

      {/* Graphs Section */}
      <div className="charts-grid">
        <div className="chart-card">
          <h3 className="chart-title">Possession Over Time</h3>
          <PossessionChart /> {/* FIX: Line chart */}
        </div>
        <div className="chart-card">
          <h3 className="chart-title">Player Metrics</h3>
          <MetricsChart /> {/* FIX: Bar chart */}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
