const reducer =  (state, action) => {
    switch (action.type) {
        case 'SET_TRANSACTIONS':
            return {
                ...state,
                transactions: action.payload,
            };
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload),
            };
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions],
            };
        default:
            return state;
    }
    
    }
export default reducer;