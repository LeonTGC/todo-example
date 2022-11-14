const Person = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <h3>{props.age}</h3>
            <button onClick={props.removeHandler}>delete</button>
        </div>
    )
}

export default Person