import React, {useContext} from 'react';
import AddTransaction from './AddTransaction';
import Balance from './Balance';
import MonthlyOverview from './MonthlyOverview';
import TransactionList from './TransactionList';
import '../CSS/Home.css'
import { IncomeExpenses } from './IncomeExpenses';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <div>
            {isAuthenticated ? (
                <>
                    <Balance />
                    <IncomeExpenses />
                    <AddTransaction />
                    <MonthlyOverview />
                    <TransactionList />
                    
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
