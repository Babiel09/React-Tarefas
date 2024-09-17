import styled from "styled-components"


const Span = styled.span`
  font-size: 64px;
  color: #fff;
  
`;

//Pegando propriedades gerais 4:
interface PropriedadesGerais4{
  tempo:number | undefined//Aqui eu estou definindo o tempo para number para que com isso eu consiga manipular o mesmo.
                //Coisa que eu não consiguiria fazer com uma string por exemplo.
              //Eu sou obrigado a colocar que o tempo é possívelmente undefined quando ele não estiver selecionado

}


                              //Aqui eu coloco o tempo = 0, sendo que ele inicialmente é undifined
export default function Relogio({tempo = 0}:PropriedadesGerais4){
    
  //Agora eu tenho que fazer o contrário do que eu fiz no meu "rodando.ts", na minha pasta de types.
  const horas = Math.floor(tempo / 3600)
  const minutos = Math.floor(tempo % 3600 / 60);
  const segundos = tempo % 60;
  const [horasDezena, horasUnidade] = String(horas).padStart(2, '0');
  const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0');//Aqui eu irei definir o valor inicial dos minutos seja "00", por isso o "2" antes do "    '0'     "
  const [segundosDezena, segundosUnidade] = String(segundos).padStart(2, '0');




  return(
            <>
            <Span>{horasDezena}</Span>
            <Span>{horasUnidade}</Span>
            <Span>:</Span>
            <Span>{minutoDezena}</Span>
            <Span>{minutoUnidade}</Span>
            <Span>:</Span>  
            <Span>{segundosDezena}</Span>
            <Span>{segundosUnidade}</Span>
            </>
    )
}
