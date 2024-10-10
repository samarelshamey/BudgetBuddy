import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';
import '../CSS/TransactionList.css';

const TransactionList = () => {
    const { transactions, setTransactions } = useContext(GlobalContext);

    useEffect(() => {
        const savedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
        setTransactions(savedTransactions);
    }, [setTransactions]);

    return (
        <div>
            <h3 className='transaction_list'>Transactions History</h3>
            <ul className='list'>
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />))}
            </ul>
        </div>
    );
}

export default TransactionList;
