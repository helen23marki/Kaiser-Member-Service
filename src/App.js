import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Receipt from './components/Receipt';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, merchant: 'Kaiser Pharmacy #402', amount: 45.00, date: '2026-05-12', category: 'Prescription' },
    { id: 2, merchant: 'Optometry Clinic', amount: 120.00, date: '2026-05-28', category: 'Vision Care' }
  ]);
  const [selectedExpense, setSelectedExpense] = useState(null);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(item => item.id !== id));
    if (selectedExpense && selectedExpense.id === id) {
      setSelectedExpense(null);
    }
  };

  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <div>
          <ExpenseForm onAddExpense={addExpense} />
          <ExpenseList 
            expenses={expenses} 
            onDeleteExpense={deleteExpense} 
            onSelectExpense={setSelectedExpense} 
          />
        </div>
        <div>
          <Receipt selectedExpense={selectedExpense} />
        </div>
      </div>
    </div>
  );
}

export default App;
