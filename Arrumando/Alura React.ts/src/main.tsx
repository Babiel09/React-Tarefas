import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1c1c1c; /* Preto suave */
    font-family: 'Arial', sans-serif; /* Fontes mais legíveis */
    margin: 0;
    padding: 0;
  }

  * {
    color: #f5f5f5; /* Cor do texto suave */
    box-sizing: border-box;
  }
`
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle/>
    <App />
  </StrictMode>,
)
