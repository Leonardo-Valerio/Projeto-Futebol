
import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';


function App() {
  
  const [jogador, setJogador] = useState([])
  
  const novoJogador=(novoJogador)=>{
    console.log(jogador)
    setJogador([...jogador, novoJogador])
  }
  return (
    
    <div className="App">
      <Banner/>
      <Formulario novoJogador={jogador=>novoJogador(jogador)}/>
    </div>
  );
}

export default App;
