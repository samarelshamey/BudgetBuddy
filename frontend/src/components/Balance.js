import React, {useContext, useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState'
import '../CSS/Balance.css'
import money from '../imgs/money.png'


function moneyFormatter(num) {
    let p = num.toFixed(2).split('.');
    return (
        '$ ' + (p[0].split('')[0]=== '-' ? '-' : '') +
        p[0]
        .split('')
        .reverse()
        .reduce(function (acc, num, i, orig) {
            return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
        }, '') + '.' + p[1]
    );
}

export const Balance = () => {
    const { transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0);

    useEffect(() => {
        sessionStorage.setItem('totalBalance', total);
    }, [total]);

return (
<div className='Balance-container'>
    <img src={money} alt="balance" className="balance-image" />
    <h4 className="balance-heading">Your Balance</h4>
    <h1>{moneyFormatter(total)}</h1>
</div>
)
}
export default Balance;
