import { createContext, useContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const intialState = { 
    transactions: []
}

export const Context = createContext(); 

export const useGlobalState = () => { 
    const context = useContext(Context);
    return context;
}

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer( AppReducer, intialState,
    () => {
        const localData = localStorage.getItem('transactions')
        return localData ? JSON.parse(localData) : intialState
    }
    );

    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(state))
    }, [state])

    const addTransaction = (transaction) => {
        // console.log("addTransaction");
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction 
        })
    };

    const deleteTransaction = (id) => {
        // console.log("addTransaction");
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id 
        })
    };

    return (
        <Context.Provider 
            value={ {
                transactions:state.transactions,
                addTransaction,
                deleteTransaction
            } }
        >
            { children }
        </Context.Provider>
    )
}