import { useEffect } from 'react'
import { useGdpContext } from "../hooks/useGdpContext"
import { useAuthContext } from "../hooks/useAuthContext"

// components
import GdpDetails from '../components/GdpDetails'
import GdpForm from '../components/GdpForm'

const Home = () => {
    const { growthRate, dispatch} = useGdpContext()
    const { user } = useAuthContext()

    useEffect(() => {
        const fetchGrowthRate = async () => {
            const response = await fetch('/api/growthRate', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (response.ok){
                dispatch({type: 'SET_GDP', payload: json})
            }
        }

        if (user) {
            fetchGrowthRate()
        }
    }, [dispatch, user])

    return (
        <div className="home">
            <div className="growthRate">
                {growthRate && growthRate.map((growthRate) => (
                    <GdpDetails key={growthRate._id} growthRate={growthRate}></GdpDetails>
                ))}
            </div>
            <GdpForm />
        </div>
    )
}

export default Home