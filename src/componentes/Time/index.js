
import Jogador from '../Jogador'
import './time.css'
import { TiDeleteOutline } from "react-icons/ti";

const Times = (props)=>{
 
    return(

        props.jogadores.length > 0 && <section className="time" style={{backgroundColor: props.corPrimaria
    }}>
            <TiDeleteOutline size={30} color={props.corSecundaria} onClick={()=>props.aoDeletarTime(props.times.id)}></TiDeleteOutline>
            <h3 style={{borderColor: props.corSecundaria}}>{props.nome}</h3>
            <div className='jogadores'>
                {props.jogadores.map(jogador=> 
                    <Jogador 
                        key={jogador.nome} 
                        jogador={jogador} 
                        corSecundaria ={props.corSecundaria} 
                        aoDeletarJogador={props.aoDeletar}
                        aoFavoritarJogador = {props.aoFavoritar}
                        />)}
                        
            </div>
        </section>
    )
}
export default Times