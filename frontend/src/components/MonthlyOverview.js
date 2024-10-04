import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

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
            <h3>Monthly Overview</h3>
            <p>Total Income: ${totalIncome}</p>
            <p>Total Expenses: ${Math.abs(totalExpenses)}</p>
            <p>Net Balance: ${netBalance}</p>
        </div>
    );
};
export default MonthlyOverview;