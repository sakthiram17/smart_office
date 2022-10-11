const ParkingSlot = (props)=>{
    let classList = ['parking-slot']
    if(!props.free)
    {
        classList.push('filled')
    }

    return(
        <div className = {classList.join(' ')}>
            {props.no}
        </div>
        )
}
export default ParkingSlot;