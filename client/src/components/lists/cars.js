// import { useQuery } from '@apollo/client'
// import { GET_CARS } from '../../graphql/queries'
// import { List } from 'antd'
// import CarCard from '../listItems/CarCard'

// const getStyles = () => ({
//   list: {
//     display: 'flex',
//     justifyContent: 'center'
//   }
// })

// const Cars = () => {
//   const styles = getStyles()
//   const { loading, error, data } = useQuery(GET_CARS)
//   if (loading) return 'Loading...'
//   if (error) return `Error! ${error.message}`

//   return (
//     <div>
//     {/* <h3>Records</h3>
//     <List grid={{ gutter: 20, column: 1 }} style={styles.list}>
//       {data.getCars.map(({ id, year, make, model, price, personId }) => (
//         <List.Item key={id}>
//           <CarCard id={id} year={year} make={make} model={model} price={price} personId={personId} />
//         </List.Item>
//       ))}
//     </List> */}
//     </div>
//   )
// }

// export default Cars
