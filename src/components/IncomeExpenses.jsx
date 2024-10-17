import { useGlobalState } from "../context/GlobalState";

const IncomeExpenses = () => {
    const {transactions} = useGlobalState();
    // console.log(transactions);
    const amounts = transactions.map(transaction => transaction.amount)
    // console.log(amounts);
    const income = amounts
                    .filter((item) => item > 0)
                    .reduce((acc, item) => (acc += item), 0)
                    .toFixed(2);
                    // console.log(income);

    const expense = amounts
                    .filter((item) => item < 0)
                    .reduce((acc, item) => (acc += item), 0)
                    .toFixed(2);
    console.log(expense);
    return (
        <>
            <div className="flex justify-between my-2">
                <h4>Income</h4>
                <p>{income}</p>
            </div>
            <div className="flex justify-between my-2">
                <h4>Expense</h4>
                <p>{ (expense)*(-1) }</p>
            </div>
        </>
    );
}

export default IncomeExpenses;
