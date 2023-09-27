import { useEffect, useState } from 'react'

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
                    <p key={growthRate._id}>{growthRate.title}</p>
                ))}
            </div>
        </div>
    )
}

export default Home