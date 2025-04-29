import React from "react";

interface CardProps {
  balance: number;
  availableLimit: number;
}

export const Card: React.FC<CardProps> = ({ balance, availableLimit }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-label font-bold">Card Balance</div>
        <div className="card-balance">${balance.toFixed(2)}</div>
        <div className="card-available">${availableLimit.toFixed(2)} Available</div>
      </div>
    </div>
  );
};