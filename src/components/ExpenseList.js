import React from 'react';
import './ExpenseList.css';

function ExpenseList({ expenses, onDeleteExpense, onSelectExpense }) {
  return (
    <div className="list-card">
      <h2>Active Claims Logs</h2>
      {expenses.length === 0 ? (
        <p>No claims found under current member portfolio.</p>
      ) : (
        expenses.map(expense => (
          <div 
            key={expense.id} 
            className="expense-item"
            onClick={() => onSelectExpense(expense)}
          >
            <div className="expense-info">
              <h4>{expense.merchant}</h4>
              <span>{expense.date}</span>
              <span style={{ fontStyle: 'italic', color: '#0077c8' }}>{expense.category}</span>
            </div>
            <div className="expense-actions">
              <span className="amount-display">${expense.amount.toFixed(2)}</span>
              <button 
                className="delete-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteExpense(expense.id);
                }}
              >
                Void
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ExpenseList;
