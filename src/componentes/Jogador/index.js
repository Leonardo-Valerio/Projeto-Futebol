import './jogador.css'
import { TiDeleteOutline } from "react-icons/ti";
import { FaRegHeart, FaHeart } from "react-icons/fa";
const Jogador =({jogador, corSecundaria, aoDeletarJogador, aoFavoritarJogador})=>{
    const favoritos = {
        size:25,
        color: corSecundaria,
        onClick: () => aoFavoritarJogador(jogador.id)
    }
    return(
        <div className="jogador">
            <TiDeleteOutline size={25} color={corSecundaria} onClick={()=>aoDeletarJogador(jogador.id)}/>
            <div className="cabecalho" style={{backgroundColor: corSecundaria}}>
                <img src={jogador.imagem} alt={jogador.nome}></img>
            </div>
            <div className="rodape">
                <h4>{jogador.nome}</h4>
                <h5>{jogador.posicao}</h5>
            </div>
            <div className='favorito'>
                {jogador.favorito?
                    <FaHeart {...favoritos} />:
                    <FaRegHeart {...favoritos} />
                }
            </div>
        </div>
    )
}
export default Jogador