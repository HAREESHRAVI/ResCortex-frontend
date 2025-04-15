import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './ModelInfo.css';
import backgroundImage from '../../assets/coding.jpeg';

const metrics = [
  { key: 'accuracy', label: 'ACCURACY', value: 95.4, color: '#EE391A' },
  { key: 'precision', label: 'PRECISION', value: 91.2, color: '#EE391A' },
  { key: 'recall', label: 'RECALL', value: 90.1, color: '#EE391A' },
  { key: 'f1Score', label: 'F1-Score', value: 89.2, color: '#EE391A' }
];

const ModelInfo = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '40vh',
    padding: '60px 20px',
    color: 'white'
  };

  return (
    <div style={containerStyle}>
      <div className="section-title">MODEL STATISTICS</div>
      <div className="section-subtitle">
        Statistics of the deployed model.
      </div>
      <div className="horizontal-container">
        {metrics.map((metric) => (
          <StaticProgress key={metric.key} metric={metric} />
        ))}
      </div>
    </div>
  );
};

function StaticProgress({ metric }) {
  return (
    <div className="metric-box">
      <div className="chart-wrapper">
        <CircularProgressbar
          value={metric.value}
          text={`${Math.round(metric.value)}%`}
          strokeWidth={5}
          styles={buildStyles({
            pathColor: metric.color,
            textColor: 'white',
            trailColor: '#3D3D3D',
            textSize: '16px'
          })}
        />
      </div>
      <div className="metric-label">{metric.label}</div>
    </div>
  );
}

export default ModelInfo;
