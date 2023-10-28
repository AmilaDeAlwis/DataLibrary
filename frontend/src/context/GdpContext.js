import { createContext, useReducer } from "react";

export const GdpContext = createContext()

export const gdpReducer = (state, action) => {
    switch (action.type) {
        case 'SET_GDP':
            return {
                growthRate: action.payload
            }
        case 'CREATE_GDP':
            return {
                growthRate: [action.payload, ...state.growthRate]
            }
        case 'DELETE_GDP':
            return {
                growthRate: state.growthRate.filter((g) => g._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const GdpContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(gdpReducer, {
        growthRate: null
    })

    return (
        <GdpContext.Provider value={{...state, dispatch}}>
            { children }
        </GdpContext.Provider>
    )
}