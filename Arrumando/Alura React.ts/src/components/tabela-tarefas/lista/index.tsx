import styled from "styled-components";

// Estilização das linhas da tabela `tr`
const Tr = styled.tr`
  margin-bottom: 10px;
  padding: 15px;
  background-color: #333;
  &:nth-child(even) {
    background-color: #3a3a3a;
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
  &:first-child {
    font-weight: bold;
  }
    
`;

// Interface da prop
interface TabelaProp {
  tarefa: string;
  tempo: string;
}

// Função do componente `itemTabela`
export default function itemTabela({ tarefa, tempo }: TabelaProp) {
  return (
    <Tr>
      <Td>{tarefa}</Td>
      <Td>{tempo}</Td>
    </Tr>
  );
}
