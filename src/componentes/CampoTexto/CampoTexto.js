

import './CampoTexto.css'


const Inputs = (props)=>{
    
    
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input type={props.tipo} value={props.valor} onChange={evento=> props.setValor(evento.target.value)}  required={props.obrigatorio} placeholder={props.placeholder}></input>
        </div>
    )
}
export default Inputs