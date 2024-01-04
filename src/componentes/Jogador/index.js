import './jogador.css'
const Jogador =({jogadores, corSecundaria})=>{
    return(
        <div className="jogador">
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