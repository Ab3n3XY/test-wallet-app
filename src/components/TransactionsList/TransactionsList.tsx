import type React from "react"
import { ChevronRight, Check } from "lucide-react"
import "./TransactionsList.css"

export const TransactionsList: React.FC = () => {
  return (
    <div className="transactions-container">

      <div className="cards-grid">
        <div className="card">
          <div className="card-content">
            <div className="card-label">Card Balance</div>
            <div className="card-balance">$17.30</div>
            <div className="card-available">$1,482.70 Available</div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="card-label">No Payment Due</div>
            <div className="card-message">You've paid your September balance.</div>
            <div className="check-container">
              <div className="check-circle">
                <Check className="check-icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="card-label">Daily Points</div>
            <div className="points-value">455K</div>
          </div>
        </div>
      </div>

      <div className="transactions-list">
        <div className="transactions-header">
          <h2 className="transactions-heading">Latest Transactions</h2>
        </div>

        <div className="transactions-items">
          {/* Apple Transaction */}
          <div className="transaction-item">
            <div className="transaction-icon apple-icon">
              <AppleIcon />
            </div>
            <div className="transaction-details">
              <div className="transaction-name">Apple</div>
              <div className="transaction-info">Pending - Card Number Used</div>
              <div className="transaction-info">Diana — Yesterday</div>
            </div>
            <div className="transaction-amount">
              <div className="amount">$14.06</div>
              <div className="percentage">3%</div>
            </div>
            <ChevronRight className="chevron-icon" />
          </div>

          {/* Payment Transaction */}
          <div className="transaction-item">
            <div className="transaction-icon payment-icon">
              <div className="payment-circle"></div>
            </div>
            <div className="transaction-details">
              <div className="transaction-name">Payment</div>
              <div className="transaction-info">From JPMorgan Chase Bank Natio...</div>
              <div className="transaction-info">Tuesday</div>
            </div>
            <div className="transaction-amount">
              <div className="amount positive">+$174.00</div>
            </div>
            <ChevronRight className="chevron-icon" />
          </div>

          {/* Apple Transaction 2 */}
          <div className="transaction-item">
            <div className="transaction-icon apple-icon">
              <AppleIcon />
            </div>
            <div className="transaction-details">
              <div className="transaction-name">Apple</div>
              <div className="transaction-info">Card Number Used</div>
              <div className="transaction-info">Diana — Tuesday</div>
            </div>
            <div className="transaction-amount">
              <div className="amount">$3.24</div>
              <div className="percentage">3%</div>
            </div>
            <ChevronRight className="chevron-icon" />
          </div>

          {/* Payment Transaction 2 */}
          <div className="transaction-item">
            <div className="transaction-icon payment-icon">
              <div className="payment-circle"></div>
            </div>
            <div className="transaction-details">
              <div className="transaction-name">Payment</div>
              <div className="transaction-info">From JPMorgan Chase Bank Natio...</div>
              <div className="transaction-info">Saturday</div>
            </div>
            <div className="transaction-amount">
              <div className="amount positive">+$99.71</div>
            </div>
            <ChevronRight className="chevron-icon" />
          </div>

          {/* Payment Transaction 3 */}
          <div className="transaction-item">
            <div className="transaction-icon payment-icon">
              <div className="payment-circle"></div>
            </div>
            <div className="transaction-details">
              <div className="transaction-name">Payment</div>
              <div className="transaction-info">From JPMorgan Chase Bank Natio...</div>
              <div className="transaction-info">Monday</div>
            </div>
            <div className="transaction-amount">
              <div className="amount positive">+$73.58</div>
            </div>
            <ChevronRight className="chevron-icon" />
          </div>

          {/* IKEA Transaction */}
          <div className="transaction-item">
            <div className="transaction-icon ikea-icon">
              <IkeaIcon />
            </div>
            <div className="transaction-details">
              <div className="transaction-name">IKEA</div>
              <div className="transaction-info">Round Rock, TX</div>
              <div className="transaction-info">10/1/22</div>
            </div>
            <div className="transaction-amount">
              <div className="amount">$21.61</div>
              <div className="percentage">2%</div>
            </div>
            <ChevronRight className="chevron-icon" />
          </div>

          {/* Target Transaction */}
          <div className="transaction-item">
            <div className="transaction-icon target-icon">
              <TargetIcon />
            </div>
            <div className="transaction-details">
              <div className="transaction-name">Target</div>
              <div className="transaction-info">Cedar Park, TX</div>
            </div>
            <div className="transaction-amount">
              <div className="amount">$73.58</div>
              <div className="percentage">2%</div>
            </div>
            <ChevronRight className="chevron-icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="icon" fill="currentColor">
      <path d="M14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Zm2.52,7.44a4.51,4.51,0,0,1,2.16-3.81,4.66,4.66,0,0,0-3.66-2c-1.56-.16-3,.91-3.83.91s-2-.89-3.3-.87A4.92,4.92,0,0,0,4.69,9.39C2.93,12.45,4.24,17,6,19.47,6.8,20.68,7.8,22.05,9.12,22s1.75-.82,3.28-.82,2,.82,3.3.79,2.22-1.24,3.06-2.45a11,11,0,0,0,1.38-2.85A4.41,4.41,0,0,1,17.46,12.63Z" />
    </svg>
  )
}

function IkeaIcon() {
  return (
    <svg viewBox="0 0 24 24" className="icon" fill="currentColor">
      <text x="4" y="16" style={{ fontSize: "12px", fontWeight: "bold" }}>
        IKEA
      </text>
    </svg>
  )
}

function TargetIcon() {
  return (
    <svg viewBox="0 0 24 24" className="icon" fill="currentColor">
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <circle cx="12" cy="12" r="7" fill="red" />
      <circle cx="12" cy="12" r="4" fill="currentColor" />
    </svg>
  )
}

export default TransactionsList
