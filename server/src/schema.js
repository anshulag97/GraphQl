import find from "lodash.find"
import remove from "lodash.remove"

const people = [
    {
      id: '1',
      firstName: 'Bill',
      lastName: 'Gates'
    },
    {
      id: '2',
      firstName: 'Steve',
      lastName: 'Jobs'
    },
    {
      id: '3',
      firstName: 'Linux',
      lastName: 'Torvalds'
    }
  ]

  const typeDefs = `
    type People {
        id: String!,
        firstName: String,
        lastName: String
    }

    type Cars {
        id: String!,
        year: Int,
        make: String,
        model: String,
        price: Float,
        personId: String!
    }

    type PersonWithCars {
      person: People
      cars: [Cars]
    }

    type Query {
        getPeople: [People]
        getPerson(id: String!): People
        getCars: [Cars]
        getCar(id: String!): Cars
        personWithCars(personId: String!): PersonWithCars
    }

    type Mutation {
        addPerson(id: String!, firstName: String!, lastName: String!): People 
        updatePerson(id: String!, firstName: String!, lastName: String!): People 
        removePerson(id: String!): People

        addCar(id: String!, year: Int!, make: String!, model: String!, price: Float!, personId: String!) : Cars
        updateCar(id: String!, year: Int!, make: String!, model: String!, price: Float!, personId: String!): Cars
        removeCar(id: String!): Cars
    }

  `

  const resolvers = {
    Query: {
        getPeople: () => people,
        getPerson: (root, args) => {
            return find(people, {id: args.id })
        },
        getCars: () => cars,
        getCar: (root, args) => {
          return find(cars, {id: args.id })
        },
        personWithCars: (root, args) => {
          const person = people.find(person => person.id === args.personId);
          if (!person) {
              throw new Error(`Couldn't find person with id ${args.id}`);
          }
          const personWithCars = cars.filter(car => car.personId === args.personId);
          return { person, cars: personWithCars };
      }
    },
    Mutation: {
        addPerson: (root,args) => {
            const newPerson = {
                id: args.id,
                firstName: args.firstName,
                lastName: args.lastName
            }

            people.push(newPerson);
            return newPerson; 
        },
        updatePerson: (root,args) => {
            const person = find(people, {id: args.id });
            if(!person){
                throw new Error(`Cannot find person with id ${args.id}`)
            }

            person.firstName = args.firstName;
            person.lastName = args.lastName;

            return person
        },
        removePerson: (root,args) => {
            const removedPerson = find(people, {id: args.id });
            if(!removedPerson){
                throw new Error(`Cannot find person with id ${args.id}`)
            }

            const carsForPerson = cars.filter((car) => car.personId === args.id);

            if (carsForPerson.length > 0) {
             cars = cars.filter((car) => car.personId !== args.id);
            }

            remove(people , p => {
                return p.id === removedPerson.id
            })

            return removedPerson
        },

        addCar: (root,args) => {
          const newCar = {
              id: args.id,
              year: args.year,
              make: args.make,
              model: args.model,
              price: args.price,
              personId: args.personId
          }

           cars.push(newCar);
          return newCar; 
      },
      updateCar: (root,args) => {
          const car = find(cars, {id: args.id });
          if(!car){
              throw new Error(`Cannot find car with id ${args.id}`)
          }

              car.year= args.year,
              car.make= args.make,
              car.model= args.model,
              car.price= args.price,
              car.personId= args.personId

          return car
      },
      removeCar: (root,args) => {
          const removedCar = find(cars, {id: args.id });
          if(!removedCar){
              throw new Error(`Cannot find car with id ${args.id}`)
          }

          remove(cars , c => {
              return c.id === removedCar.id
          })

          return removedCar
      }
    }
  }
  
  let cars = [
    {
      id: '1',
      year: '2019',
      make: 'Toyota',
      model: 'Corolla',
      price: '40000',
      personId: '1'
    },
    {
      id: '2',
      year: '2018',
      make: 'Lexus',
      model: 'LX 600',
      price: '13000',
      personId: '1'
    },
    {
      id: '3',
      year: '2017',
      make: 'Honda',
      model: 'Civic',
      price: '20000',
      personId: '1'
    },
    {
      id: '4',
      year: '2019',
      make: 'Acura ',
      model: 'MDX',
      price: '60000',
      personId: '2'
    },
    {
      id: '5',
      year: '2018',
      make: 'Ford',
      model: 'Focus',
      price: '35000',
      personId: '2'
    },
    {
      id: '6',
      year: '2017',
      make: 'Honda',
      model: 'Pilot',
      price: '45000',
      personId: '2'
    },
    {
      id: '7',
      year: '2019',
      make: 'Volkswagen',
      model: 'Golf',
      price: '40000',
      personId: '3'
    },
    {
      id: '8',
      year: '2018',
      make: 'Kia',
      model: 'Sorento',
      price: '45000',
      personId: '3'
    },
    {
      id: '9',
      year: '2017',
      make: 'Volvo',
      model: 'XC40',
      price: '55000',
      personId: '3'
    }
  ]
  
  export { typeDefs, resolvers }