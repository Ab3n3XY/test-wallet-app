import React from "react"
import { ArrowLeft } from 'lucide-react'
import "./TransactionDetail.css"

interface TransactionDetailProps {
  transaction: {
    id: string
    name: string
    amount: string
    date: string
    status: string
    paymentMethod: string
    isPositive?: boolean
  }
  onClose: () => void
}

export const TransactionDetail: React.FC<TransactionDetailProps> = ({ transaction, onClose }) => {
  return (
    <div className="transaction-detail-overlay" onClick={onClose}>
      <div className="transaction-detail-container" onClick={(e) => e.stopPropagation()}>
        <div className="transaction-detail-header">
          <button className="back-button" onClick={onClose}>
            <ArrowLeft className="back-icon" />
          </button>
        </div>
        
        <div className="transaction-detail-content">
        <div className="transaction-detail-amount-section">
            <h1 className={`transaction-detail-amount ${transaction.isPositive ? 'positive' : ''}`}>
              ${transaction.amount}
            </h1>
            <p className="transaction-detail-merchant">{transaction.name}</p>
            <p className="transaction-detail-date">
              {new Date(transaction.date).toLocaleString()}
            </p>
          </div>
          
          <div className="transaction-detail-info-section">
            <div className="transaction-detail-info-row">
              <span className="transaction-detail-label">Status:</span>
              <span className="transaction-detail-value">{transaction.status}</span>
            </div>
              <span className="transaction-detail-label text-gray-300">{transaction.paymentMethod}</span>
              
            <div className="transaction-detail-divider"></div>
            <div className="transaction-detail-info-row">
              <span className="transaction-detail-label">Total</span>
              <span className="transaction-detail-value">${transaction.amount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionDetail
