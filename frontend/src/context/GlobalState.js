import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
    transactions: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        const fetchTransactions = async () => {
            const token = localStorage.getItem('access_token');
            if (token) {
                try {
                    const response = await axios.get('http://localhost:8000/api/user-transactions/', {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    dispatch({
                        type: 'SET_TRANSACTIONS',
                        payload: response.data,
                    });
                } catch (error) {
                    console.error('Failed to fetch transactions:', error);
                }
            }
        };

        fetchTransactions();
    }, []);

    function setTransactions(transactions) {
        dispatch({
            type: 'SET_TRANSACTIONS',
            payload: transactions,
        });
    }

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id,
        });
        const updatedTransactions = state.transactions.filter(transaction => transaction.id !== id);
        localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction,
        });
        const updatedTransactions = [...state.transactions, transaction];
        localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
    }
    

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction,
            setTransactions,
        }}>
            {children}
        </GlobalContext.Provider>
    );
};