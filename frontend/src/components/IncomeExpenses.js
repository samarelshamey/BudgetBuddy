import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import '../CSS/IncomeExpenses.css'
import IncomeImg from '../imgs/income.png'
import expensesImg from '../imgs/expense.png'

function moneyFormatter(num) {
    const number = parseFloat(num);

    
    if (isNaN(number)) {
        console.error("Could not convert to number:", num);
        return '$ 0.00';
    }
    
    let p = num.toFixed(2).split('.');
    return (
        '$ ' +
        p[0]
        .split('')
        .reverse()
        .reduce(function (acc, num, i, orig) {
            return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
        }, '') + '.' + p[1]
    );
}

export const IncomeExpenses = () => {
    const { transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0);

    const expense = (
      amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
    );

    return (
    <div className="inc-exp-container">
        <div>
            <img src={IncomeImg} alt="IncomeImg" className="income-image" />
            <h4 className="income-expenses-heading">Income</h4>
            <p className="money plus">{moneyFormatter(income)}</p>
        </div>
        <div>
            <img src={expensesImg} alt="expensesImg" className="expenses-image" />
            <h4 className="income-expenses-heading">Expense</h4>
            <p className="money minus">{moneyFormatter(expense)}</p>
        </div>
        </div>
    )
}

