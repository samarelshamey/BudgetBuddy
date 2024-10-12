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
        <div className="home-container">
            {isAuthenticated ? (
                <>
                    <section className="section-balance">
                        <Balance />
                    </section>
                    <section className="section-income-expenses">
                        <IncomeExpenses />
                    </section>
                    <section className="section-add-transaction">
                        <AddTransaction />
                    </section>
                    <div className='section-overview-transaction'>
                        <section className="section-monthly-overview">
                            <MonthlyOverview />
                        </section>
                        <section className="section-transaction-list">
                            <TransactionList />
                        </section>
                    </div>
                        
                </>
            ) : (
                <>
                    <section className="section-balance">
                        <Balance />
                    </section>
                    <section className="section-income-expenses">
                        <IncomeExpenses />
                    </section>
                    <section className="section-add-transaction">
                        <AddTransaction />
                    </section>
                </>
            )}
        </div>
    );
};

export default Home;