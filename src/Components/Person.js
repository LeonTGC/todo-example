
import { PersonWrapper } from "../Styles/Styles"

const Person = (props) => {
    return (
        <PersonWrapper finished={props.finished}>
            <h2>{props.name}</h2>
            <h3>{props.age}</h3>
            <button onClick={props.removeHandler}>delete</button>
            <button onClick={props.completed}>finished</button>
        </PersonWrapper>
    )
}

export default Person