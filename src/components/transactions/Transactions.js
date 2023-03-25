import React from 'react';
import './Transaction.css'

export default function Transactions({ transactions }) {
  return (
    <div className="Transactions">
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.date.toLocaleString()} - Amount: ₹{transaction.amount} was {transaction.type} {transaction.type === 'added' ? 'to' : 'from'} the balance.
          </li>
        ))}
      </ul>
    </div>
  );
}

