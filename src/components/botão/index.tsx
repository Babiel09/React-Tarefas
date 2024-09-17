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
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: ()=> void; //Adiconando o "type" para eu conseguir escrever o tipo do meu botão, seja ele submit ou não.
  //O ponto de interrogação mostra que o "type" é uma proprieda opcional do botão
} 


export default function Botao({nome, type, onClick}:ButtonProps){
    return(
        <BotaoContainer
         type={type} onClick={onClick}
        >
          {nome}
        </BotaoContainer>
    )
}

