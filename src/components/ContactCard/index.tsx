import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, editar } from '../../store/reducers/contatos'
import Contato from '../../models/Contato'

type Props = Contato

const ContactCard = ({
  nome: nomeOriginal,
  email: emailOriginal,
  phone: phoneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()

  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState(nomeOriginal)
  const [email, setEmail] = useState(emailOriginal)
  const [phone, setPhone] = useState(phoneOriginal)

  // useEffect(() => {
  //   if (nomeOriginal.length > 0) {
  //     setNome(nomeOriginal)
  //   }
  // }, [nomeOriginal])

  return (
    <S.Card>
      <S.Nome
        disabled={!estaEditando}
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
      />
      <S.Email
        disabled={!estaEditando}
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
      />
      <S.Phone
        disabled={!estaEditando}
        value={phone}
        onChange={(evento) => setPhone(evento.target.value)}
      />
      {estaEditando ? (
        <>
          <S.BotaoSalvar
            onClick={() => {
              dispatch(
                editar({
                  nome,
                  email,
                  phone,
                  id
                })
              )
              setEstaEditando(false)
            }}
          >
            Salvar
          </S.BotaoSalvar>
          <S.BotaoCancelarRemover
            onClick={() => {
              setEstaEditando(false)
              setNome(nomeOriginal)
              setEmail(emailOriginal)
              setPhone(phoneOriginal)
            }}
          >
            Cancelar
          </S.BotaoCancelarRemover>
        </>
      ) : (
        <>
          <S.ContactButton onClick={() => setEstaEditando(true)}>
            Editar
          </S.ContactButton>
          <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
            Remover
          </S.BotaoCancelarRemover>
        </>
      )}
    </S.Card>
  )
}

export default ContactCard
