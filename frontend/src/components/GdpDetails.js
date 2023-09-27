const GdpDetails = ({ growthRate }) => {
    return (
        <div className="growthRate-details">
            <h4>{growthRate.title}</h4>
            <p><strong>Previous Year: </strong>{growthRate.previous}</p>
            <p><strong>Current Year: </strong>{growthRate.current}</p>
            <p><strong>Next year: </strong>{growthRate.next}</p>
            <p>{growthRate.createdAt}</p>
        </div>
    )
}

export default GdpDetails