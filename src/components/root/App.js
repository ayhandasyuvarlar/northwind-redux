import Navi from "../nav/Navi";
import { Container } from "reactstrap";
import Dashbord from "./Dashbord";
function App() {
  return (
    <Container>
      <Navi />
      <Dashbord/>
    </Container>
  );
}

export default App;
