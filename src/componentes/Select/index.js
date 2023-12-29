import './Select.css'

const Select = (props)=>{
    return(
        <>  <div className='Select'>
                <label>{props.label}</label>
                <select required={props.obrigatorio} onChange={evento=>(props.setValor(evento.target.value))}>
                    {props.itens.map(item=> <option key={item}>{item}</option>)}
                </select>
            </div>
        </>
    )
}
export default Select