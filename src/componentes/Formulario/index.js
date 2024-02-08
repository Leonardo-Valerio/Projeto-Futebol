import { useState } from 'react';
import Botao from '../Botao';
import Inputs from '../CampoTexto/CampoTexto';
import Select from '../Select';
import './Formulario.css'
const Formulario=(props)=>{

    const posicoes = ['Atacante','Ponta Esquerda', 'Ponta Direita' ,'Meio Campista', 'Volante', 'Lateral Esquerdo', 'Lateral Direito', 'Zagueiro', 'Goleiro']

    const [nome,setNome]=useState('')
    const [posicao,setPosicao] = useState('')
    const [imagem,setImagem]=useState('')
    const [time,setTime] = useState('')
    const [corPrimaria, setCorPrimaria] = useState('#000000')
    const [corSecundaria, setCorSecundaria] = useState('#000000')
    const [nomeTime,setNomeTime]=useState('')



    const aoSalvar = (evento)=>{
        evento.preventDefault()
        props.novoJogador({nome, posicao, imagem, time})
        setNome('')
        setPosicao('')
        setTime('')
        setImagem('')
    }

    const aoSalvarTime = (evento)=>{
        evento.preventDefault()
        props.adicionarTime({'nome':nomeTime, 'corPrimaria':corPrimaria, 'corSecundaria':corSecundaria})
        setNomeTime('')
        setCorPrimaria('')
        setCorSecundaria('')
    }
    

    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do jogador</h2>
                <Inputs obrigatorio={true} label = 'Nome' placeholder='Digite seu nome' valor ={nome} setValor={setNome}/>
                <Select obrigatorio={true} label='Posição' itens = {posicoes} valor ={posicao} setValor={setPosicao}/>
                <Inputs label = 'Imagem' placeholder='Informe o endereço da imagem' valor = {imagem} setValor={setImagem}/>
                <Select obrigatorio={true} label='Time' itens = {props.nomeDosTimes} valor={time} setValor={setTime}/>
                <Botao>Criar Card</Botao>
            </form>
            <form onSubmit={aoSalvarTime}>
            <h2>Preencha os dados para criar um time</h2>
                <Inputs obrigatorio={true} tipo = 'text' label = 'Nome' placeholder='Digite seu nome' valor ={nomeTime} setValor={setNomeTime}/>
                <Inputs tipo= 'color' label = 'Cor Primária' placeholder='Informe a cor primária' valor = {corPrimaria} setValor={setCorPrimaria}/>
                <Inputs tipo = 'color' label = 'Cor Secundária' placeholder='Informe a cor secundária' valor = {corSecundaria} setValor={setCorSecundaria}/>
                <Botao>Criar Time</Botao>
            </form>
        </section>
    )
}
export default Formulario