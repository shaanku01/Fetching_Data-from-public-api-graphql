import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import './App.css';
import Card from './card';


const query = gql`
{
  ships(sort: "name") {
    id
    name
    image
    weight_kg
    weight_lbs
    year_built
  }
}
`

function App() {

  const {loading,error,data} = useQuery(query);

  if(loading)
  return <h1>Loading ...</h1>;

  if(error)
    return <h1>Error Occured</h1>;


    if(data){
      console.log(data.ships);
      return (
        <div className="App">
          {data.ships.map((ship) => {
            return  <Card {...ship}/>
          })}
        </div>
      );

    }

  
}

export default App;
