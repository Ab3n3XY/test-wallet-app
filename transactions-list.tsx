import { ChevronRight, Check } from "lucide-react";
import "./src/components/TransactionsList/TransactionsList.css";
import { Card } from "./components/Card";
import transactionsData from "./src/data/transactions.json"; // Import the JSON file
import React, { useState } from "react";
import { TransactionDetail } from "./src/components/TransactionDetail/TransactionDetail";
import DailyPoints  from "./components/DailyPoints";
import { isToday } from "date-fns";

export const TransactionsList: React.FC = () => {
  const balance = Math.random() * 1500;
  const availableLimit = 2000 - balance;
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null);

  const handleTransactionClick = (transaction: any) => {
    setSelectedTransaction(transaction);
  };

  const handleCloseDetail = () => {
    setSelectedTransaction(null);
  };

  return (
    <div className="transactions-container">
      <div className="cards-grid">
        <div className="card-col">
          <Card balance={balance} availableLimit={availableLimit} />
          <div className="card">
            <DailyPoints
                seasonStart={new Date('2025-04-01')}
              />
          </div>
        </div>

        <div className="card full-height">
          <div className="card-content">
            <div className="card-label font-bold">No Payment Due</div>
            <div className="card-message">You've paid your September balance.</div>
            <div className="check-container">
              <div className="check-circle">
                <Check className="check-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 pb-2">
          <h2 className="text-xl font-bold">Latest Transactions</h2>
        </div>

        <div className="divide-y">
          {transactionsData.transactions.map((transaction) => (
            <div key={transaction.id} className="p-4 flex flex-col">
              <div className="flex items-center cursor-pointer" onClick={() => handleTransactionClick(transaction)}>
                <div className="h-10 w-10 rounded-md flex items-center justify-center mr-3" 
                     style={{ backgroundColor: getIconBackgroundColor(transaction.name) }}>
                  {getIconComponent(transaction.name)}
                </div>
                <div className="flex-1">
                  <div className="font-semibold">{transaction.name}</div>
                  <div className="text-xs text-gray-500">
                    {transaction.pending ? "Pending - " : ""}{transaction.description}
                  </div>
                  <div className="text-xs text-gray-500">
                    {transaction.authorizedUser ? `${transaction.authorizedUser} — ` : ""}{transaction.date}
                  </div>
                </div>
                <div className="text-right">
                  <div className={`font-semibold ${transaction.type === "Payment" ? "text-green-600" : ""}`}>
                    {transaction.type === "Payment" ? `+$${transaction.amount}` : `$${transaction.amount}`}
                  </div>
                  {transaction.type === "Credit" && <div className="text-xs text-gray-500">3%</div>}
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedTransaction && (
        <TransactionDetail
          transaction={{
            id: selectedTransaction.id,
            name: selectedTransaction.name,
            amount: selectedTransaction.amount,
            date: selectedTransaction.date,
            status: selectedTransaction.pending ? "Pending" : "Completed",
            paymentMethod: "Credit Card", // Adjust as needed
            isPositive: selectedTransaction.type === "Payment",
          }}
          onClose={handleCloseDetail}
        />
      )}
    </div>
  );
};

  export default TransactionsList;

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
      <path d="M14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Zm2.52,7.44a4.51,4.51,0,0,1,2.16-3.81,4.66,4.66,0,0,0-3.66-2c-1.56-.16-3,.91-3.83.91s-2-.89-3.3-.87A4.92,4.92,0,0,0,4.69,9.39C2.93,12.45,4.24,17,6,19.47,6.8,20.68,7.8,22.05,9.12,22s1.75-.82,3.28-.82,2,.82,3.3.79,2.22-1.24,3.06-2.45a11,11,0,0,0,1.38-2.85A4.41,4.41,0,0,1,17.46,12.63Z" />
    </svg>
  )
}

function IkeaIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-white font-bold" fill="currentColor">
      <text x="4" y="16" style={{ fontSize: "12px", fontWeight: "bold" }}>
        IKEA
      </text>
    </svg>
  )
}

function TargetIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <circle cx="12" cy="12" r="7" fill="red" />
      <circle cx="12" cy="12" r="4" fill="currentColor" />
    </svg>
  )
}

// Helper function to get the icon component based on the transaction name
function getIconComponent(name: string) {
  switch (name) {
    case "Apple":
      return <AppleIcon />;
    case "Ikea":
      return <IkeaIcon />;
    case "Target":
      return <TargetIcon />;
    case "Uber":
      return <UberIcon />; // Add a new UberIcon component if needed
    case "Paypal":
      return <PaypalIcon />; // Add a new PaypalIcon component if needed
    default:
      return null; // Default case for unknown names
  }
}

// Helper function to get the background color based on the transaction name
function getIconBackgroundColor(name: string) {
  switch (name) {
    case "Apple":
      return "black";
    case "Ikea":
      return "blue";
    case "Target":
      return "red";
    case "Uber":
      return "black"; // Example color for Uber
    case "Paypal":
      return "blue"; // Example color for Paypal
    default:
      return "gray"; // Default color for unknown names
  }
}

// Add new icon components if needed
function UberIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8h-2v2h-2v-2H9v-2h2V8h2v2h2v2z" />
    </svg>
  );
}

function PaypalIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8h-2v2h-2v-2H9v-2h2V8h2v2h2v2z" />
    </svg>
  );
}

