import styled from "styled-components";
import Botao from "../botão";
import Relogio from "./Relogio";
import { cronometroSegundos } from "../../common/utils/rodando";
import { TarefaProps } from "../../types/tarefa";
import { useEffect, useState } from "react";


const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: fixed;
  bottom: 167px;
  left: 1000px;
  &:hover {
    background-color: #2a2a2a;
  }
  
  
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
interface PropriedadesGerais3{
  selecionado: TarefaProps | undefined
}

//Cronômetro
export default function Cronometro({selecionado}:PropriedadesGerais3){
  //Definindo o useState para modificar o relógio:
  const [tempo, setTempo] = useState<number>();
  
  useEffect(()=>{
    if(selecionado?.tempo){//Se exsite selecionado e se existe o "selecionado.tempo"
      setTempo(cronometroSegundos(selecionado.tempo))
      console.log("conversão: ",cronometroSegundos(selecionado.tempo))
    }
  }, [selecionado]);
  




    return(
        <Div>
            <H1>Iniciar Tarefa</H1>
            <Div2>
                <Relogio
                tempo={tempo}
                />
            </Div2>
            <Botao
            nome="Iniciar"
            type={"button"} //Usando a propriedade do botão.
            />
        </Div>
    )
}

