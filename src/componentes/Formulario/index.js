import Inputs from '../CampoTexto/CampoTexto';
import './Formulario.css'
const Formulario=()=>{
    return(
        <section className='formulario'>
            <form>
            <h2>Preencha os dados para criar o card do jogador</h2>
                <Inputs label = 'Nome' placeholder='Digite seu nome'/>
                <Inputs label = 'Posição' placeholder='Digite sua posição'/>
                <Inputs label = 'Imagem' placeholder='Informe o endereço da imagem'/>
                <Inputs label = 'Time' placeholder='Digite o time que faz parte'/>
            </form>
        </section>
    )
}
export default Formulario