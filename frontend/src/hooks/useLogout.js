import { useAuthContext } from "./useAuthContext"
import { useGdpContext } from "./useGdpContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: gdpDispatch } = useGdpContext()

    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch({ type: 'LOGOUT'})
        gdpDispatch({ type: 'SET_GDP', payload: null})
    }
    return { logout }
}