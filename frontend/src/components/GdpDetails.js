import { useAuthContext } from "../hooks/useAuthContext"
import { useGdpContext } from "../hooks/useGdpContext"

//date fns
import FormatDistanceToNow from 'date-fns/formatDistanceToNow'

const GdpDetails = ({ growthRate }) => {
    const { dispatch } = useGdpContext()
    const { user } = useAuthContext()

    const handleClick = async () => {
        
        if (!user) {
            return
        }
        
        const response = await fetch('/api/growthRate/' + growthRate._id, {
            method: 'DELETE',
            header: {
                'Authorization': `Bearer ${user.tokrn}`
            }
        })
        const json = await response.json()
    
        if (response.ok) {
            dispatch({type: 'DELETE_GDP', payload: json})
        }
    }
    
    return (
        <div className="growthRate-details">
            <h4>{growthRate.title}</h4>
            <p><strong>Previous Year: </strong>{growthRate.previous}</p>
            <p><strong>Current Year: </strong>{growthRate.current}</p>
            <p><strong>Next year: </strong>{growthRate.next}</p>
            <p>{FormatDistanceToNow(new Date(growthRate.createdAt), { addSuffix: true})}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default GdpDetails