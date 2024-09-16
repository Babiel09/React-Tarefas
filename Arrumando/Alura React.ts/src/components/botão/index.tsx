import styled from "styled-components";

//Style do botao
const BotaoContainer = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
    transform: translateY(-5px);
  }
`

interface ButtonProps { // Propriedades de todos os botões
  nome: string;
} 


function Botao({nome}:ButtonProps){
    return(
        <BotaoContainer>{nome}</BotaoContainer>
    )
}

export default Botao