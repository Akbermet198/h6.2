import "./button.css"

function Button(props){
    // const { color, text } = props;
    return (
        
     <div>
<button className="button" onClick={props.onClick}> {props.title}</button>
     </div>
    )
    }

    export default Button