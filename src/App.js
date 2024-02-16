
import { useEffect, useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Times from './componentes/Time';
import hexToRgba from 'hex-to-rgba';
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
    fetch('http://localhost:8080/players',{
        method:"POST",
        headers:{ 
          "Content-Type":"application/json"
        },
        body:JSON.stringify(novoJogador)
    })
    .then(resposta=>resposta.json())
    .then(data=> setJogador([...jogador, data])
    )
  }

  const novoTime = (newTime)=>{
    fetch('http://localhost:8080/teams',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(newTime)
    })
    .then(resposta=>resposta.json())
    .then(data => setTime([...times,data]))
    
    
  }

  const aoDeletarJogador=(id)=>{
    fetch(`http://localhost:8080/players/${id}`,{
      method:"DELETE"
    })
    .then((resposta)=> {if (resposta.ok){
      setJogador((prevJogadores)=>
      prevJogadores.filter((player)=>player.id!== id)) 
    }
    else{
      console.error("Erro ao deletar jogador:", resposta.status)
    }    
  })
    
    
  }
  const favoritarJogador = (id) => {
    
    jogador[id].favorito = !jogador[id].favorito;
    
    fetch(`http://localhost:8080/players/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( jogador[id] ),
    })
      .then((resposta) => resposta.json())
      .then((data) => {
        
        setJogador((prevJogadores) => {
          prevJogadores[id] = data;
          return [...prevJogadores]
        }
        );
      })
      .catch((error) => console.error('Error favoriting player:', error));
  };
  
  
  const aoDeletarTime = (id)=>{
    fetch(`http://localhost:8080/teams/${id}`,{
      method:"DELETE"
    })
    .then((resposta)=> {
      if(resposta.ok){
        setTime((prevTimes)=>prevTimes.filter((time)=>time.id !== id))
      }
      else{
        console.log("Erro ao deletar jogador:", resposta.status)
      }})
  }

  return (
    
    <div className="App">
      <Banner/>
      <Formulario adicionarTime = {times=>novoTime(times)} novoJogador={jogador=>novoJogador(jogador)} nomeDosTimes={times.map(time=>time.nome)} jogadores = {jogador}/>
      {times.map((time,index)=><Times
        key ={index}
        nome={time.nome}
        corPrimaria={hexToRgba(time.corPrimaria,0.7)}
        corSecundaria={hexToRgba(time.corSecundaria,0.9)}
        jogadores ={jogador.filter(jogador=> jogador.time === time.nome)}
        aoDeletar={aoDeletarJogador}
        aoFavoritar = {favoritarJogador}
        aoDeletarTime = {aoDeletarTime}
        times = {time}
        />)}
    </div>
  );
}

export default App;
