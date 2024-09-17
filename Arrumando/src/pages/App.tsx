import styled from 'styled-components'
import Form from '../components/formulário/index.tsx'
import Tabela from '../components/tabela-tarefas/index.tsx'
import Cronometro from '../components/cronometro/index.tsx'
import { useState } from 'react'
import { TarefaProps } from '../types/tarefa.ts'

//Modificaro estilo da div aqui
const DivContainer = styled.div ``



function App() {
  const [tarefas, setTarefas]  = useState<Array<TarefaProps> | []>([])
  const [selecionado, setSelecionado] = useState<TarefaProps>() //Esse estado não precisa ser um array, pois ele não tera informações jogadas dentro dele
  
  //Criando a função para o elemento selecionado:
  function tarefaSelecionada(tarefaSelecionada:TarefaProps):any{
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa, 
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))

  };

    //Criando a função para finalizar a tarefa:
    function encerrarTarefa(){
      if(selecionado){
        setSelecionado(undefined)
        setTarefas(tarefasAnteriores=> 
          tarefasAnteriores.map((tarefa)=>{
            if(tarefa.id === selecionado.id){
              return{
                ...tarefa,
                selecionado: false,
                completo :true
              }
             
            } 
            return tarefa;
          })
        )
      }
    }










  
  return (
      <DivContainer>
        <Form setTarefas={setTarefas}/>   
        <Tabela 
        tarefas={tarefas}
        tarefaSelecionada={tarefaSelecionada}/>
        <Cronometro  
        selecionado={selecionado}
        encerrarTarefa={encerrarTarefa}
        />
      </DivContainer>

  )
}

export default App;
