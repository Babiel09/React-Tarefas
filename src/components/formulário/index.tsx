import styled from "styled-components";
import Botao from "../botão";
import React, { SetStateAction, Dispatch } from "react";
import { TarefaProps } from "../../types/tarefa";
import {v4 as uuidv4} from "uuid"



//Style do form.
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  margin: 20px auto;
  background-color: ##1c1c1c; /* Cinza escuro */
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
     &:hover {
    background-color: #2a2a2a;
  }
`

//Style da div 1 e 2:
const DivContainer = styled.div`
  margin-bottom: 15px;
  width: 100%;
  
`

const DivContainer2 = styled(DivContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

//Style do input:

const InputContainer = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border-radius: 4px;
  border: 1px solid #555;
  background-color: #333;
  color: #f5f5f5;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #4caf50;
  }
`

const InputContainer2 = styled(InputContainer)`
  width: 70%;
`

//Style das labels:
const LabelContainer = styled.label`
  font-size: 32px;
  color: #4caf50;

`

const LabelContainer2 = styled(LabelContainer)`
  margin-right: 10px;
`


//Criando o form:

class Form extends React.Component<{
  setTarefas: Dispatch<SetStateAction<Array<TarefaProps>>
>}> {
  // Estado do componente
  state = {
    tarefa: "",
    tempo: "00:00:00",
  };
  //Criando o método para adicionar a tarefa:
  adicionarTarefa(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault(); // Com o preventDefault, eu aviso ao React que o meu formulário não deve ser autalizado.
    this.props.setTarefas(tarefasExistentes =>[...tarefasExistentes, {...this.state, selecionado:false, completo:false, id: uuidv4()}]);
    this.setState({
      tarefa: "",
      tempo: "00:00:00"
  }) //O state é um objeto, logo precisa de chaves
  }


  render() {
    return (
      <FormContainer onSubmit={this.adicionarTarefa.bind(this)}>
        <DivContainer>
          <LabelContainer>
            Digite aqui sua tarefa:
            <InputContainer
              type="text"
              name="tarefa"
              placeholder="Escreva a tarefa aqui"
              value={this.state.tarefa}
              onChange={input => this.setState({...this.state, tarefa: input.target.value})}
              required
            />
          </LabelContainer>
        </DivContainer>

        <DivContainer2>
          <LabelContainer2>
            Digite o tempo:
            <InputContainer2
              type="time"
              name="tempo"
              step={1}
              min={"00:00:00"}
              max={"04:30:00"}
              value={this.state.tempo} //Aqui eu falo que o valor do input é o atributo tempo do useState
              onChange={input => this.setState({...this.state, tempo: input.target.value})} //Aqui no onChange eu coloco o input em um modo para ser alterado
              required
            />
          </LabelContainer2>
        </DivContainer2>
        <Botao nome={"Enviar"} type={"submit"} /> 
      </FormContainer>
    );
  }
}//Agora vou modificar o botão para ele ser do tipo submit, assim ele enviara as informações dos inputs para a tabela

export default Form;