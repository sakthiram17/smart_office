const Card = (props)=>{
    return(
        <div className = 'parking-slot-card'>
            <h2>Total Number of Slots : {props.n}  </h2>
            <h2>Slots Free : {props.free}</h2>
            <h2>Slots Filled : {props.filled}</h2>
        </div>
        )

}
export default Card;