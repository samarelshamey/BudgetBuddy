import React from 'react';
import AddTransaction from './AddTransaction';
import Balance from './Balance';
import MonthlyOverview from './MonthlyOverview';
import TransactionList from './TransactionList';
import '../CSS/Home.css'
import { IncomeExpenses } from './IncomeExpenses';

const Home = ({ isAuthenticated }) => {
    return (
        <div>
            {isAuthenticated ? (
                <>
                    <Balance />
                    <IncomeExpenses />
                    <MonthlyOverview />
                    <TransactionList />
                    <AddTransaction />
                </>
            ) : (
                <>
                    <Balance />
                    <IncomeExpenses />
                    <AddTransaction />
                </>
            )}
        </div>
    );
};

export default Home;
