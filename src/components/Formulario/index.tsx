import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import Contato from '../../models/Contato'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const adicionarContato = new Contato(nome, email, phone, 9)

    dispatch(cadastrar(adicionarContato))
    navigate('/')
  }

  return (
    <form onSubmit={cadastrarContato}>
      <S.header>Adicionar contato à lista</S.header>
      <S.Card>
        <S.label htmlFor="nome">Nome Completo</S.label>
        <S.input
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          id="nome"
          type="text"
          placeholder="Nome Completo"
        />
        <S.label htmlFor="email">Email</S.label>
        <S.input
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          id="email"
          type="email"
          placeholder="email@provider.com"
        />
        <S.label htmlFor="phone">Telefone (DDD)</S.label>
        <S.input
          value={phone}
          onChange={(evento) => setPhone(evento.target.value)}
          id="phone"
          type="text"
          placeholder="(000) 000000000"
        />
        <S.BotaoSalvar type="submit">Cadastrar</S.BotaoSalvar>
      </S.Card>
    </form>
  )
}

export default Formulario
