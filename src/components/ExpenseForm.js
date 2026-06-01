import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm({ onAddExpense }) {
  const [merchant, setMerchant] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('Co-Pay');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!merchant || !amount || !date) return;
    
    onAddExpense({
      merchant,
      amount: parseFloat(amount),
      date,
      category
    });

    setMerchant('');
    setAmount('');
    setDate('');
  };

  return (
    <div className="form-card">
      <h2>File Reimbursement Claim</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Provider / Merchant</label>
          <input 
            type="text" 
            placeholder="e.g. Kaiser Specialty Care" 
            value={merchant} 
            onChange={(e) => setMerchant(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Amount ($)</label>
          <input 
            type="number" 
            step="0.01" 
            placeholder="0.00" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Service Date</label>
          <input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Expense Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Co-Pay">Co-Pay</option>
            <option value="Prescription">Prescription</option>
            <option value="Vision Care">Vision Care</option>
            <option value="Laboratory">Laboratory</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">Submit to Claims Pipeline</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
