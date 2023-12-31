import { DeleteOutlined } from '@ant-design/icons'
import { useMutation } from '@apollo/client'
import { GET_PEOPLE, REMOVE_PERSON} from '../../graphql/queries'
import { filter } from 'lodash'

const RemovePerson = ({ id }) => {

  const [removePerson] = useMutation(REMOVE_PERSON, {
    update(cache, { data: { removePerson } }) {
      const { getPeople } = cache.readQuery({ query: GET_PEOPLE })

      cache.writeQuery({
        query: GET_PEOPLE,
        data: {
          getPeople: filter(getPeople, p => {
            return p.id !== removePerson.id
          })
        }
      })
    }
  })

  const handleButtonClick = () => {
    let result = window.confirm('Are you sure you want to delete this Person?')

    if (result) {
      removePerson({
        variables: {
          id
        }
      })
    }
  }

  return <DeleteOutlined key='delete' onClick={handleButtonClick} style={{ color: 'red' }} />
}

export default RemovePerson
