import { useSelector } from 'react-redux'
import ContactCard from '../ContactCard'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  return (
    <ul>
      {itens.map((c) => (
        <li key={c.nome}>
          <ContactCard
            nome={c.nome}
            email={c.email}
            phone={c.phone}
            id={c.id}
          />
        </li>
      ))}
    </ul>
  )
}

export default ListaDeContatos
