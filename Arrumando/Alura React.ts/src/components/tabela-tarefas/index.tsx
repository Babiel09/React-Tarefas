import styled from "styled-components";
import ItemTabela from "./lista";

// Estilização do container `aside`
const Aside = styled.aside`
  padding: 30px;
  margin: 40px auto;
  width: 90%;
  max-width: 600px;
  background-color: #1e1e1e;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  color: #fff;
  transition: transform 0.3s ease;

  &:hover {
    background-color: #2a2a2a;
  }
`;

// Estilização do título `h2`
const H2 = styled.h2`
  font-size: 32px;
  margin-bottom: 25px;
  text-align: center;
  color: #4caf50;
  letter-spacing: 1.2px;
  border-bottom: 2px solid #4caf50;
  padding-bottom: 10px;
`;

// Estilização da tabela
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #2a2a2a;
  border-radius: 8px;
  overflow: hidden;
`;
const Tbody = styled.tbody`
  background-color: #2a2a2a; /* Fundo escuro, consistente com a tabela */
  color: #f1f1f1; /* Texto branco fosco */
  border-radius: 8px;
`;



// Função da lista:
function TableaTarefas() {
  // Adicionando tarefas com array de forma dinâmica:
  const tarefas = [
    { tarefa: "Tarefa1", tempo: "02:00:00" },
    { tarefa: "Tarefa2", tempo: "01:00:00" },
    { tarefa: "Tarefa3", tempo: "10:00:00" }
  ];

  return (
    <Aside>
      <H2>Estudos:</H2>
      <Table>
        <Tbody>
          {tarefas.map((item, index) => (
            <ItemTabela key={index} {...item}/>
          ))}
        </Tbody>
      </Table>
    </Aside>
  );
}

export default TableaTarefas;
