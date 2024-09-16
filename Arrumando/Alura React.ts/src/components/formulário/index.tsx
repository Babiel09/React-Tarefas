import styled from "styled-components";
import Botao from "../botão";



//Style do form.
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  margin: 20px auto;
  background-color: #2c2c2c; /* Cinza escuro */
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

function Form(){
    return(
        <FormContainer>
            <DivContainer>
                <LabelContainer>
                    Digite aqui sua tarefa: 
                    <InputContainer type="text" name="tarefa" placeholder="Manda a tarefa" required/>
                </LabelContainer>
            </DivContainer>



            <DivContainer2>
                <LabelContainer2 htmlFor="tempo">
                    Digite o tempo:
                    <InputContainer2  type="time" name="tempo" step={1} min={'00:00:00'} max={"04:30:00"}  required/>
                </LabelContainer2>
                </DivContainer2>
                <Botao
                nome="Adicionar Tarefa"
                />

        </FormContainer>
    )
}

export default Form;