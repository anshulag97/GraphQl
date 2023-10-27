import { useQuery } from '@apollo/client'
import { GET_PEOPLE } from '../../graphql/queries'
import { List } from 'antd'
import PersonCard from '../listItems/PersonCard'

const getStyles = () => ({
  list: {
    display: 'flex',
    justifyContent: 'center'
  }
})

const People = () => {
  const styles = getStyles()
  const { loading, error, data } = useQuery(GET_PEOPLE)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <div>
    <h3 style={{textAlign:'center', marginBottom: '30px'}}>Records</h3>
    <List grid={{ gutter: 20, column: 1 }} style={styles.list}>
      {data.getPeople.map(({ id, firstName, lastName }) => (
        <List.Item key={id}>
          <PersonCard id={id} firstName={firstName} lastName={lastName} />
        </List.Item>
      ))}
    </List>
    </div>
  )
}

export default People
