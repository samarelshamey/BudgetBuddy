import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import '../CSS/MonthlyOverview.css'

const MonthlyOverview = () => {
    const { transactions } = useContext(GlobalContext);

    const totalIncome = transactions
        .filter(t => t.amount > 0)
        .reduce((acc, t) => acc + t.amount, 0);
    const totalExpenses = transactions
        .filter(t => t.amount < 0)
        .reduce((acc, t) => acc + t.amount, 0);
    const netBalance = totalIncome + totalExpenses;

    return (
        <div>
            <h3  className='Monthly-overview'>Monthly Overview</h3>
            <p className="total-income">Total Income: ${totalIncome}</p>
            <p className="total-expenses">Total Expense: ${Math.abs(totalExpenses)}</p>
            <p className="net-balance">Net Balance: ${netBalance}</p>
        </div>
    );
};
export default MonthlyOverview;