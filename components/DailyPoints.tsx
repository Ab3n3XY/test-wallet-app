import React from 'react';
import { calculateDailyPoints, formatPoints } from './calculatePoints';

interface DailyPointsProps {
  seasonStart: Date;
}

const DailyPoints: React.FC<DailyPointsProps> = ({ seasonStart }) => {
    const currentDate = new Date(); // Set currentDate to today's date
    const points = calculateDailyPoints(seasonStart, currentDate);
    const formatted = points >= 1000 ? `${(points / 1000).toFixed(1)}k` : points.toLocaleString();
  
    return (
      <div className="card bg-whiterounded">
        <div className="card-content mt-2">
          <div className="card-label font-bold">Daily Points</div>
          <div className="points-value">{formatted}</div>
        </div>
      </div>
    );
  };

export default DailyPoints;
