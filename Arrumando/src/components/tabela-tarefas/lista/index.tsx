import styled from "styled-components";
import { TarefaProps } from "../../../types/tarefa";

// Estilização das linhas da tabela `tr`
const Tr = styled.tr<{isSelected:boolean}>`
  margin-bottom: 10px;
  padding: 15px;
  background-color: ${props => props.isSelected ? '#4caf50': '#333'};
  &:nth-child(even) {
    background-color: ${props => props.isSelected ? '#4caf50': '#333'};
  }

  &:hover {
    background-color: #4caf50;
    color: white;
    transition: background-color 0.3s ease;
  }
`;

// Estilização das células da tabela `td`
const Td = styled.td`
  padding: 16px;
  text-align: left;
  font-size: 18px;
  color: #f1f1f1;
  border-bottom: 1px solid #4caf50;
  cursor: pointer;
  &:first-child {
    font-weight: bold;
  }
    
`;

//Criando a Propriedade Geral:
interface PropriedadadesGerais2 extends TarefaProps{
  tarefaSelecionada: (tarefaSelecionada:TarefaProps) => void
}
//Funcção para terminar o código:

export default function itemTabela({ tarefa,
   tempo,
    selecionado,
     completo,
      id,
       tarefaSelecionada
       }: PropriedadadesGerais2) 
       {
  //Para que quando eu clique na tarefa ela mude de cor, isso deve acontecer:
  const isSelected:boolean = selecionado;
  return (
    <Tr isSelected={isSelected} onClick={() => tarefaSelecionada({
      tarefa,
       tempo,
        selecionado,
         completo,
          id
    })}>
      <Td>{tarefa}</Td>
      <Td>{tempo}</Td>  
    </Tr>
  );
}
