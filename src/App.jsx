import { useQuery, gql } from "@apollo/client";
import Tablas from "./components/tablas";
import Header from "./components/sections/header";
import Topbar from "./components/Topbar/Topbar";
import VistaEmer from "./components/Emergente/CreateCustomer";

const QUERY_CUSTOMER = gql`
  query {
    customers {
      _id
      Name
      Lastname
      Age
      Phonenumber
      Email
      password
      city
    }
  }
`;

function App() {
  const { data, error, loading } = useQuery(QUERY_CUSTOMER);
  return (
    // <div className="App">
    //   {loading ? <p>loading... </p> : <Tablas customs={data?.customers} />}
    // </div>
    // <Header/>
    <Topbar/>
    // <VistaEmer/>
  );
}

export default App;
