//Expense list, add expense button, account profile, filter/search/sort functionality

import React, { useState } from 'react';
import AddExpense from '../AddExpense/AddExpense';
import AccountProfile from '../AccountProfile/AccountProfile';

export default function Expenses () {
    const [expenseModal, setExpenseModal] = useState(false);
    const [profileModal, setProfileModal] = useState(false);
    const [expenses, setExpenses] = useState();

    const deleteExpense = (indexToDelete) =>
    setExpenses((currentExpenses) =>
      currentExpenses.filter((expense, index) => index !== indexToDelete)
      );

    const addExpense = (newExpense) =>
      setExpenses((currentExpenses) => [
        ...currentExpenses,
        newExpense
      ]);

      function Expense ({ expense, deleteExpense }) {
        return(
          <tr className='row'>
          <td>
            {expense.title}
          </td>
          <td>
            {expense.amount}
          </td>
          <td>
            {expense.date}
          </td>
          <td>
            {expense.type}
          </td>
          <td>
            {expense.category}
          </td>
          <td>
            {expense.note}
          </td>
          <td>
            <button name="delete" onClick={deleteExpense}>Delete</button>
          </td>
          </tr>
        )
      };


      function ExpensesList ({ expenses, deleteExpense }) {
        return(
          <div className="expenseList">
            <table>
              <thead>
                <th>Title</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Type</th>
                <th>Category</th>
                <th>Note</th>
              </thead>
              <tbody className='tableRows'>
                {expenses.map((expense, index) => (
                  <Expense deleteExpense={() => deleteExpense(index)} key="index" expense={expense} />
                ))}
              </tbody>
            </table>
          </div>
        )
      };

    return (
        <div>
            <h1 className='profileBtn' onClick={() => setProfileModal(true)}>User1's expenses</h1>
            <h2>Account Name</h2>
            <AccountProfile open={profileModal} onClose={() => setProfileModal(false)} />
            <button className='modalBtn' onClick={() => setExpenseModal(true)}>Add Expense</button>
            <AddExpense addExpense={addExpense} open={expenseModal} onClose={() => setExpenseModal(false)} />
            <ExpensesList expenses={expenses} deleteExpense={deleteExpense} />
        </div>
    )
}