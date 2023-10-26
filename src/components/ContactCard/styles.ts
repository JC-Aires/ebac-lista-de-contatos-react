import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 12em 12em;
  padding: 8px;
  border: 1px solid blue;
  margin-bottom: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
  border-radius: 4px;
`

export const Nome = styled.textarea`
  font-size: 24px;
  font-weigth: bold;
  color: ${variaveis.preto};
  text-transform: uppercase;
  margin-right: 32px;
  width: 60%;
  height: 60%;
  resize: none;
  border: none;
  background-color: transparent;
  font-size: 24px;
  font-weight: bold;
  line-height: 20px;
  font-family: 'Poppis', sans-serif;
  margin: auto;
`

export const Email = styled.textarea`
  margin-right: 32px;
  width: 60%;
  height: 60%;
  resize: none;
  border: none;
  color: ${variaveis.preto};
  background-color: transparent;
  font-size: 24px;
  font-weight: bold;
  line-height: 20px;
  font-family: 'Poppis', sans-serif;
  margin: auto;
`

export const Phone = styled.textarea`
  width: 60%;
  height: 60%;
  resize: none;
  border: none;
  color: ${variaveis.preto};
  background-color: transparent;
  font-size: 24px;
  font-weight: bold;
  line-height: 20px;
  font-family: 'Poppis', sans-serif;
  margin: auto;
`

export const ContactButton = styled.button`
  background-color: ${variaveis.amarelo};
  display: block;
  border: none;
  border-radius: 8px;
  font-size: 24px;
  font-weight: bold;
  margin-right: 8px;
  cursor: pointer;
`

export const BotaoSalvar = styled(ContactButton)`
  background-color: ${variaveis.verde};
`
export const BotaoCancelarRemover = styled(ContactButton)`
  background-color: ${variaveis.vermelho};
`
