import React, { useState } from 'react';
import './Balance.css';

export default function Balance({ balance, onAdd, onRemove }) {
  const [amount, setAmount] = useState();

  const handleAdd = () => {
    if (amount > 0) {
      onAdd(amount);
      setAmount(0);
    }
  };

  const handleRemove = () => {
    if (amount > 0 && balance >= amount) {
      onRemove(amount);
      setAmount(0);
    }
  };

  return (
    <div className="Balance">
      <h2>Balance ₹{balance}</h2>
      <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
      <div>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
}
