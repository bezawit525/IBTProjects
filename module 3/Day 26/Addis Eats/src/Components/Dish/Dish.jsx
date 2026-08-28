function Dish(props){
    return(
        <div className="dish">
            <h3>{props.name}</h3>
            <p>{props.price}</p>

        </div>
    )
}
export default Dish;
