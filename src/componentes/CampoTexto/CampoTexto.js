import './CampoTexto.css'

const Inputs = (props)=>{
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={props.placeholder}></input>
        </div>
    )
}
export default Inputs