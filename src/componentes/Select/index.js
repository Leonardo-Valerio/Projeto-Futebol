import './Select.css'

const Select = (props)=>{
    return(
        <>  <div className='Select'>
                <label>{props.label}</label>
                <select required={props.obrigatorio} onChange={evento=>(props.setValor(evento.target.value))} value={props.valor}>
                    <option value={''}></option>
                    {props.itens.map((item,index)=> <option key={index}>{item}</option>)}
                </select>
            </div>
        </>
    )
}
export default Select