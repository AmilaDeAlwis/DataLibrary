import { useState } from "react"
import { useGdpContext } from "../hooks/useGdpContext"

const GdpForm = () => {
    const { dispatch } = useGdpContext()

    const [title, setTitle] = useState('')
    const [previous, setPrevious] = useState('')
    const [current, setCurrent] = useState('')
    const [next, setNext] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

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
            setEmptyFields(json.emptyFields)
        }
        if (response.ok){
            setTitle('')
            setPrevious('')
            setCurrent('')
            setNext('')
            setError(null)
            setEmptyFields([])
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
                className={emptyFields.includes('title') ? 'error' : ''}
            />

            <label>Previous year: </label>
            <input 
                type="number"
                onChange={(e) => setPrevious(e.target.value)}
                value={previous}
                className={emptyFields.includes('previous') ? 'error' : ''}
            />

            <label>Current Year: </label>
            <input 
                type="number"
                onChange={(e) => setCurrent(e.target.value)}
                value={current}
                className={emptyFields.includes('current') ? 'error' : ''}
            />

            <label>Next Year: </label>
            <input 
                type="number"
                onChange={(e) => setNext(e.target.value)}
                value={next}
                className={emptyFields.includes('next') ? 'error' : ''}
            /> 

            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default GdpForm