import { useState } from "react"
import { useGdpContext } from "../hooks/useGdpContext"

const GdpForm = () => {
    const { dispatch } = useGdpContext()

    const [title, setTitle] = useState('')
    const [previous, setPrevious] = useState('')
    const [current, setCurrent] = useState('')
    const [next, setNext] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const growthRate = {title, previous, current, next}

        const response = await fetch('/api/growthRate', {
            method: 'POST',
            body: JSON.stringify(growthRate),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok){
            setError(json.error)
        }
        if (response.ok){
            setTitle('')
            setPrevious('')
            setCurrent('')
            setNext('')
            setError(null)
            console.log('New Workout Added', json)
            dispatch({type: 'CREATE_GDP', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New GDP Detail</h3>

            <label>Coutry Name: </label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label>Previous year: </label>
            <input 
                type="number"
                onChange={(e) => setPrevious(e.target.value)}
                value={previous}
            />

            <label>Current Year: </label>
            <input 
                type="number"
                onChange={(e) => setCurrent(e.target.value)}
                value={current}
            />

            <label>Next Year: </label>
            <input 
                type="number"
                onChange={(e) => setNext(e.target.value)}
                value={next}
            /> 

            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default GdpForm