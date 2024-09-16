import styled from "styled-components";
import Botao from "../botão";
import Relogio from "./Relogio";


const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  
`;

const Div2 = styled.div`
  margin: 20px 0;
  
`;

const H1 = styled.h1`
  font-size: 1.2rem;
  color: #6aff63;
  margin-bottom: 10px;
  font-size: 32px;
`;


//Cronômetro
export default function Cronometro(){
    return(
        <Div>
            <H1>Deseja Iniciar a tarefa?</H1>
            <Div2>
                <Relogio />
            </Div2>
            <Botao
            nome="Iniciar" //Usando a propriedade do botão.
            />
        </Div>
    )
}

