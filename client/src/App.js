import './App.css';
import Title from './components/layout/Title';
import AddPerson from './components/forms/AddPerson'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import People from './components/lists/people'
import AddCar from './components/forms/AddCar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import PersonWithCars from './components/lists/PersonWithCars';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})


const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <Router>
          <Routes>
            <Route path="/" element={ <div style={{display:'flex' , flexDirection: 'column', justifyContent: 'center' }}> <Title /> <AddPerson /> <AddCar /> <People /> </div> } />
            <Route exact path="/people/:personId" element={ <PersonWithCars /> }/>
          </Routes>
        </Router>
      </div>
    </ApolloProvider>
  )
}

export default App;
