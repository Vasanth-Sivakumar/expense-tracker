import React, { useState } from 'react';
import Balance from './components/balance/Balance';
import Transactions from './components/transactions/Transactions';
import './App.css';

function App() {
  const [balance, setBalance] = useState(500);
  const [transactions, setTransactions] = useState([]);

  const handleAdd = (amount) => {
    const newBalance = balance + amount;
    setBalance(newBalance);
    setTransactions([...transactions, { date: new Date(), amount, type: 'added' }]);
  };

  const handleRemove = (amount) => {
    const newBalance = balance - amount;
    setBalance(newBalance);
    setTransactions([...transactions, { date: new Date(), amount, type: 'removed' }]);
  };

  return (
    <div className="App">
      <h1 className='title'>Expense Tracker - Basic</h1>
      <Balance balance={balance} onAdd={handleAdd} onRemove={handleRemove} />
      <Transactions transactions={transactions} />
    </div>
  );
}

export default App;
