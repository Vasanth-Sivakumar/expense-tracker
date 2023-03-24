import React from 'react';

export function Transactions(props) {
  const transactionList = props.transactions.map((transaction, index) => (
    <li key={index}>
      {transaction.type === 'add' ? '+' : '-'}{transaction.amount} ({transaction.date.toString()})
    </li>
  ));

  return (
    <div>
      <h2>Transactions:</h2>
      <ul>{transactionList}</ul>
    </div>
  );
}