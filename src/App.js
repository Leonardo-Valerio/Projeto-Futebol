
import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Times from './componentes/Time';


function App() {
  
  const [jogador, setJogador] = useState([])
  
  const novoJogador=(novoJogador)=>{
    console.log(jogador)
    setJogador([...jogador, novoJogador])
  }
  const times=[
    {
      'nome': 'Barcelona',
      'corPrimaria':'#9e1f49c1',
      'corSecundaria': '#00529F'
    },
    {
      'nome': 'Real Madrid',
      'corPrimaria':'#FFFFFF',
      'corSecundaria': '#004996'
    },
    {
      'nome': 'Milan',
      'corPrimaria':'#fa0808a2',
      'corSecundaria': '#000000'
    },
    {
      'nome': 'Inter de Milão',
      'corPrimaria':'#00229cb9',
      'corSecundaria': '#000000'
    },
    {
      'nome': 'Liverpool',
      'corPrimaria':'#d00026be',
      'corSecundaria': '#00A398'
    },
    {
      'nome': 'Manchester City',
      'corPrimaria':'#7bb1ddd7',
      'corSecundaria': '#002E60'
    },
    {
      'nome': 'Borussia Dortmund',
      'corPrimaria':'#e5d954',
      'corSecundaria': '#000000'
    },
    {
      'nome': 'Bayern Munich',
      'corPrimaria':'#dd0129cf',
      'corSecundaria': '#0066B3'
    }

  ]
  return (
    
    <div className="App">
      <Banner/>
      <Formulario novoJogador={jogador=>novoJogador(jogador)} nomeDosTimes={times.map(time=>time.nome)}/>
      {times.map(time=><Times key ={time.nome}nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} jogadores ={jogador.filter(jogador=> jogador.time === time.nome)}/>)}
    </div>
  );
}

export default App;
