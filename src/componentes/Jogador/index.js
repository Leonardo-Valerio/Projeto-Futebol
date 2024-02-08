import './jogador.css'
import { TiDeleteOutline } from "react-icons/ti";
const Jogador =({jogadores, corSecundaria, aoDeletarJogador})=>{
    return(
        <div className="jogador">
            <TiDeleteOutline size={25} onClick={()=>aoDeletarJogador(jogadores.nome)}/>
            <div className="cabecalho" style={{backgroundColor: corSecundaria}}>
                <img src={jogadores.imagem} alt={jogadores.nome}></img>
            </div>
            <div className="rodape">
                <h4>{jogadores.nome}</h4>
                <h5>{jogadores.posicao}</h5>
            </div>
        </div>
    )
}
export default Jogador