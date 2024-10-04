import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';
import '../CSS/AddTransaction.css'

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    const [isIncome, setIsIncome] = useState(null);
    

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        
        if (text.trim() === '') {
            alert('Please enter a valid transaction');
            return;
        }

        if (amount === '' || isNaN(amount)) {
            alert('Please enter a valid amount.');
            return;
        }

        if (isIncome === null) {
            alert('Please select whether this is an income or expense.');
            return;
        }

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: isIncome ? Math.abs(amount) : -Math.abs(amount),
        };
        addTransaction(newTransaction);
        setText('');
        setAmount('');
        setIsClicked(true);
        setIsIncome(null);
    }

return (
<>
    <h3>Transaction Time!</h3>
        <form onSubmit={onSubmit}>
        
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e) => {
                    setText(e.target.value);
                    setIsClicked(false);
                }} placeholder="Enter text..." />
            </div>
            <div className="form-control">
                <label htmlFor="amount"
                    >Amount <br />
                    (negative - expense, positive - income)</label>
                <input type="number" value={amount} onChange={(e) => {
                    setAmount(e.target.value);
                    setIsClicked(false);
                }} placeholder="Enter amount..." />
            </div>
            <div className="transaction-type">
                    <label>
                        <input
                            type="radio"
                            name="transactionType"
                            checked={isIncome === true}
                            onChange={() => setIsIncome(true)}
                        />
                        Income
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="transactionType"
                            checked={isIncome === false}
                            onChange={() => setIsIncome(false)} // Set to expense
                        />
                        Expense
                    </label>
            </div>
            <button className={`btn ${text.trim() && amount !== 0 ? 'active' : ''} ${isClicked ? 'clicked' : ''}`}>
                Add New Transaction
            </button>
        </form>
</>
);
};

export default AddTransaction;