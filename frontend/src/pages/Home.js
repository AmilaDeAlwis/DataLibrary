import { useEffect } from 'react'
import { useGdpContext } from "../hooks/useGdpContext"

// components
import GdpDetails from '../components/GdpDetails'
import GdpForm from '../components/GdpForm'

const Home = () => {
    const { growthRate, dispatch} = useGdpContext()

    useEffect(() => {
        const fetchGrowthRate = async () => {
            const response = await fetch('/api/growthRate')
            const json = await response.json()

            if (response.ok){
                dispatch({type: 'SET_GDP', payload: json})
            }
        }
        fetchGrowthRate()
    }, [dispatch])

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