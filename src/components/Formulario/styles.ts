import { styled } from 'styled-components'
import variaveis from '../../styles/variaveis'
import { ContactButton } from '../ContactCard/styles'

export const Card = styled.div`
  display: flex;
  padding: 8px;
  margin-top: 3em;
  border: 1px solid blue;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
  border-radius: 4px;
  align-items: center;
`

export const header = styled.h1`
  display: flex;
  margin: 16px auto;
  width: 100%;
  justify-content: center;
`

export const label = styled.label`
  padding: 8px;
  margin-left: 1em;
`

export const input = styled.input`
  width: 20%;
  height: 2em;
  font-size: 16px;
  border-radius: 4px;
`
export const BotaoSalvar = styled(ContactButton)`
  background-color: ${variaveis.verde};
  padding: 8px;
  margin-left: 5em;
  font-size: 16px;
`
