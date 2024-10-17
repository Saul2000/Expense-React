
import { useGlobalState } from '../context/GlobalState';

const Balance = () => {

    const { transactions} = useGlobalState();

    const amounts = transactions.map(transaction => transaction.amount)

    const total = amounts.reduce((acc, item) => (acc += item), 0)

    return (
        <div className="flex justify-between">
            {/* {JSON.stringify(amounts, null, 2)} */}
            <h3>Balance</h3>
            <h1 className='text-xl font-bold'>${total}</h1>
            <div>
            </div>
        </div>
    );
}

export default Balance;
