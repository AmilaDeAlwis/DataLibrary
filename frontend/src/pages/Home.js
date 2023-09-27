import { useEffect, useState } from 'react'

// components
import GdpDetails from '../components/GdpDetails'

const Home = () => {
    const [growthRate, setGrowthRate] = useState(null)

    useEffect(() => {
        const fetchGrowthRate = async () => {
            const response = await fetch('/api/growthRate')
            const json = await response.json()

            if (response.ok){
                setGrowthRate(json)
            }
        }
        fetchGrowthRate()
    }, [])

    return (
        <div className="home">
            <div className="growthRate">
                {growthRate && growthRate.map((growthRate) => (
                    <GdpDetails key={growthRate._id} growthRate={growthRate}></GdpDetails>
                ))}
            </div>
        </div>
    )
}

export default Home