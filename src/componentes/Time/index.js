import Jogador from '../Jogador'
import './time.css'

const Times = (props)=>{
    return(
        <section className="time" style={{backgroundColor: props.corPrimaria}}>
            <h3 style={{borderColor: props.corSecundaria}}>{props.nome}</h3>
            <div className='jogadores'>
                {props.jogadores.map(jogador=> <Jogador jogadores={jogador}/>)}
            </div>
        </section>
    )
}
export default Times