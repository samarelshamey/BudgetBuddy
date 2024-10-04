import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import '../CSS/Transaction.css'

const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';
    const capitalizedText = transaction.text.charAt(0).toUpperCase() + transaction.text.slice(1);


    return (
        <div className='Transaction'>
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {capitalizedText} <span>{sign}${Math.abs(transaction.amount)}</span>
            <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
        </div>
    )
}

export default Transaction;


