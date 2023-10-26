import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
`

export const Container = styled.div`
  height: 93vh;
  background-color: #74b9ff;
  overflow-y: scroll;
`

export default EstiloGlobal
