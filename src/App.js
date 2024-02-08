
import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Times from './componentes/Time';


function App() {
  

  const [times,setTime]=useState([
    {
      'id': 0 ,
      'nome': 'Barcelona',
      'corPrimaria':'#9e1f49c1',
      'corSecundaria': '#00529F'
    },
    {
      'id': 1 ,
      'nome': 'Real Madrid',
      'corPrimaria':'#f0f0f0',
      'corSecundaria': '#004996'
    },
    {
      'id': 2 ,
      'nome': 'Milan',
      'corPrimaria':'#fa0808a2',
      'corSecundaria': '#000000'
    },
    {
      'id': 3 ,
      'nome': 'Inter de Milão',
      'corPrimaria':'#00229cb9',
      'corSecundaria': '#000000'
    },
    {
      'id': 4 ,
      'nome': 'Liverpool',
      'corPrimaria':'#f10707a1',
      'corSecundaria': '#00A398'
    },
    {
      'id': 5 ,
      'nome': 'Manchester City',
      'corPrimaria':'#7bb1ddd7',
      'corSecundaria': '#002E60'
    },
    {
      'id': 6 ,
      'nome': 'Borussia Dortmund',
      'corPrimaria':'#e5d954',
      'corSecundaria': '#000000'
    },
    {
      'id': 7 ,
      'nome': 'Bayern Munich',
      'corPrimaria':'#dd0129cf',
      'corSecundaria': '#0066B3'
    }
    
  ])

  const [jogador, setJogador] = useState([
    { 
      'id': 0 ,
      'nome':'Lewandowski',
      'posicao':'Atacante',
      'imagem': 'https://conteudo.imguol.com.br/c/esporte/3c/2023/11/12/robert-lewandowski-do-barcelona-comemora-gol-contra-o-alaves-pelo-campeonato-espanhol-1699809015376_v2_1x1.jpg',
      'time': times[0].nome,
      'favorito': false
    },
    { 
      'id': 1,
      'nome':'Pedri',
      'posicao':'Meio Campista',
      'imagem': 'https://tntsports.com.br/__export/1679146606471/sites/esporteinterativo/img/2023/03/18/pedri-gettyimages-1243917925.jpg_423682103.jpg',
      'time': times[0].nome,
      'favorito': false
    },
    {
      'id': 2,
      'nome':'Vini Jr',
      'posicao':'Ponta Esquerda',
      'imagem': 'https://tntsports.com.br/__export/1668117182174/sites/esporteinterativo/img/2022/11/02/vini_jr_mxo_no_peito.png_423682103.png',
      'time': times[1].nome,
      'favorito': false
    },
    { 
      'id': 3,
      'nome': 'Modric',
      'posicao': 'Meio Campista',
      'imagem':'https://conteudo.imguol.com.br/c/esporte/eb/2023/04/21/luka-modric-do-real-madrid-durante-partida-contra-o-chelsea-na-liga-dos-campeoes-1682083188459_v2_1x1.jpg',
      'time': times[1].nome,
      'favorito': false
    },
    {
      'id': 4,
      'nome': 'Rafael Leão',
      'posicao': 'Ponta Esquerda',
      'imagem':'https://i.superesportes.com.br/Mdr6ewJ0KrluHHfw99OFATiEz6o=/1200x1200/smart/imgsapp.mg.superesportes.com.br/app/noticia_126420360808/2022/04/27/3968635/rafael-leao-no-duelo-entre-milan-e-genoa-pelo-italiano_1_36722.jpg',
      'time': times[2].nome,
      'favorito': false
    },
    { 
      'id': 5,
      'nome':'Giroud',
      'posicao': 'Atacante',
      'imagem': 'https://static1.purebreak.com.br/articles/2/11/19/72/@/513045-atacante-da-selecao-da-franca-giroud-mi-700x700-1.jpg',
      'time': times[2].nome,
      'favorito': false
    },
    {
      'id': 6,
      'nome': 'Lautaro',
      'posicao': 'Atacante',
      'imagem': 'https://tntsports.com.br/__export/1594849442841/sites/esporteinterativo/img/2020/07/15/lautaro_martinez_crop1594848690140.jpg_423682103.jpg',
      'time':times[3].nome,
      'favorito': false
    },
    {
      'id': 7,
      'nome':'Barella',
      'posicao': 'Meio Campista',
      'imagem': 'https://cdn.vox-cdn.com/thumbor/BEtJfg9d__PppuNElZSy-UJHBu8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22674592/1232922836.jpg',
      'time': times[3].nome,
      'favorito': false
    },
    {
      'id': 8,
      'nome':'Mohamed Salah',
      'posicao':'Ponta Direita',
      'imagem': 'https://www.correiodopovo.com.br/image/contentid/policy:1.848813:1677760928/FILES-FBL-ENG-PR-LIVERPOOL-SALAH.jpg?a=1%3A1&$p$a=f8e3f80',
      'time': times[4].nome,
      'favorito': false
    },
    { 
      'id': 9,
      'nome':'Alisson',
      'posicao': 'Goleiro',
      'imagem': 'https://conteudo.imguol.com.br/c/esporte/97/2023/03/03/alisson-durante-partida-do-liverpool-contra-o-real-madrid-pela-liga-dos-campeoes-1677869172548_v2_450x450.jpg',
      'time': times[4].nome,
      'favorito': false
    },
    {
      'id': 10,
      'nome':'Haaland',
      'posicao': 'Atacante',
      'imagem': 'https://tntsports.com.br/__export/1674401279678/sites/esporteinterativo/img/2023/01/22/haaland_chega_ao_quarto_hat-trick_com_o_city_1.jpg_423682103.jpg',
      'time':times[5].nome,
      'favorito': false
    },
    {
      'id': 11,
      'nome':'De Bruyne',
      'posicao': 'Meio Campista',
      'imagem': 'https://conteudo.imguol.com.br/c/parceiros/9a/2023/04/20/kevin-de-bruyne-mandou-um-recado-para-o-real-madrid-e-tambem-para-o-manchester-city-1682002162263_v2_450x450.jpg',
      'time':times[5].nome,
      'favorito': false
    },
    { 
      'id': 12,
      'nome': 'Reus',
      'posicao': 'Meio Campista',
      'imagem': 'https://placar.abril.com.br/wp-content/uploads/2023/05/82D3E372-0FD4-43AD-A3D2-4157DA1BA681.jpeg?quality=70&strip=info&w=1024',
      'times':times[6].nome,
      'favorito': false
    },
    { 
      'id': 13,
      'nome': 'Hummels',
      'posicao': 'Zagueiro',
      'imagem': 'https://static.dw.com/image/55459921_804.jpg',
      'times':times[6].nome,
      'favorito': false
    },
    {
      'id': 14,
      'nome': 'Harry Kane',
      'posicao': 'Atacante',
      'imagem':  'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MjAwMDM0ODMxOTk4OTIwMDU2/imago1033194400h-1.jpg',
      'time':times[7].nome,
      'favorito': false
    },
    { 
      'id': 15,
      'nome': 'Aphonso Davies',
      'posicao': 'Lateral Esquerdo',
      'imagem': 'https://tntsports.com.br/__export/1703428144847/sites/esporteinterativo/img/2023/12/24/alphonso_davies_-gettyimages-1472201717.jpg_423682103.jpg',
      'time':times[7].nome,
      'favorito': false
    }
    
  ])
  

  
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
      <Formulario adicionarTime = {times=>novoTime(times)} novoJogador={jogador=>novoJogador(jogador)} nomeDosTimes={times.map(time=>time.nome)}/>
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
