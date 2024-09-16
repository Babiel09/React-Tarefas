import styled from "styled-components"


const Span = styled.span`
  font-size: 64px;
  color: #fff;
`;



export default function Relogio(){
    return(
            <>
            <Span>0</Span>
            <Span>0</Span>
            <Span>:</Span>
            <Span>0</Span>
            <Span>0</Span>
            </>
    )
}
