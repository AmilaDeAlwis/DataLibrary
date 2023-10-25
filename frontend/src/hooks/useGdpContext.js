import { GdpContext } from "../context/GdpContext";
import { useContext } from "react";

export const useGdpContext = () => {
    const context = useContext(GdpContext)

    if (!context) {
        throw Error('useGdpContext must be used inside an GdpContextProvider')
    }
    return context
}