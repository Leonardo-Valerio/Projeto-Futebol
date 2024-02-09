
import { useEffect, useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Times from './componentes/Time';
const useCarregarDados =(caminho,set)=>{
  useEffect(
    ()=>{
      fetch('http://localhost:8080/'+caminho)
      .then(resposta=>resposta.json())
      .then(dados=>
        set(dados)
      )
      .catch(erro => console.error('Erro:', erro))
    }
  ,[caminho,set])
}

function App() {
  

  const [times,setTime]=useState([])

  const [jogador, setJogador] = useState([])


useCarregarDados('players',setJogador)
useCarregarDados('teams',setTime)

  
  const novoJogador=(novoJogador)=>{
    console.log(jogador)
    setJogador([...jogador, novoJogador])
  }

  const novoTime = (newTime)=>{
    console.log(times)
    setTime([...times,newTime])
    
  }

  const aoDeletarJogador=(nomeJogador)=>{
    let index = jogador.findIndex(jogador=> jogador.nome === nomeJogador)
    setJogador(jogador.filter((jogador,i)=> i!== index))
    
  }
  const favoritarJogador = (id)=>{
        jogador[id].favorito = !jogador[id].favorito
        setJogador([...jogador])
  }
  
  return (
    
    <div className="App">
      <Banner/>
      <Formulario adicionarTime = {times=>novoTime(times)} novoJogador={jogador=>novoJogador(jogador)} nomeDosTimes={times.map(time=>time.nome)} jogadores = {jogador}/>
      {times.map((time,index)=><Times
        key ={index}nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        jogadores ={jogador.filter(jogador=> jogador.time === time.nome)}
        aoDeletar={aoDeletarJogador}
        aoFavoritar = {favoritarJogador}
        />)}
    </div>
  );
}

export default App;
