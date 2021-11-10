
import './style.css'
import ChildrenBuilding from "./childrenBuilding";
import  {client,LIST_COUNTRIES} from "./data";
import { useQuery} from '@apollo/client';



function App() {
    const {data, loading, error} = useQuery(LIST_COUNTRIES, {client});

    if (loading || error) {
        return <p>{error ? error.message : 'Loading...'}</p>;
    }
    console.log(data.continents.countries)


  return (
        <ChildrenBuilding
            children={data.continents}
        />


  );
}

export default App;
