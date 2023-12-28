import Botao from '../Botao';
import Inputs from '../CampoTexto/CampoTexto';
import Select from '../Select';
import './Formulario.css'
const Formulario=()=>{
    const times = ['Barcelona', 'Real Madrid', 'Milan', 'Inter de Milão' ,'Liverpool', 'Manchester City', 'Bayern Munich', 'Borussia Dortmund']
    const posicoes = ['Atacante','Ponta Esquerda', 'Ponta Direita' ,'Meio Campista', 'Volante', 'Lateral Esquerdo', 'Lateral Direito', 'Zagueiro', 'Goleiro']

    const aoSalvar = (evento)=>{
        evento.preventDefault()
        console.log('form enviado')
    }

    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do jogador</h2>
                <Inputs obrigatorio={true} label = 'Nome' placeholder='Digite seu nome'/>
                <Select obrigatorio={true} label='Posição' itens = {posicoes}/>
                <Inputs label = 'Imagem' placeholder='Informe o endereço da imagem'/>
                <Select obrigatorio={true} label='Time' itens = {times}/>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}
export default Formulario