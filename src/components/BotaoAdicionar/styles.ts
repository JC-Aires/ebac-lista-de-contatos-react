import { Link } from 'react-router-dom'

import { styled } from 'styled-components'
import variaveis from '../../styles/variaveis'

export const ButtonTop = styled(Link)`
  background-color: ${variaveis.verde};
  color: ${variaveis.preto};
  border: none;
  padding: 8px;
  border-radius: 8px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  margin-right: 6em;
  text-decoration: none;
`
