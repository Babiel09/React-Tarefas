import styled from 'styled-components'
import Form from './components/formulário/index.tsx'
import Tabela from './components/tabela-tarefas/index.tsx'
import Cronometro from './components/cronometro/index.tsx'

//Modificaro estilo da div aqui
const DivContainer = styled.div ``



function App() {

  return (
      <DivContainer>
        <Form/> 
        <Tabela/>
        <Cronometro/>
      </DivContainer>

  )
}

export default App;
