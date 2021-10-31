import "./App.css";
import AllContacts from "./Components/AllContacts/AllContacts";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateContact from "./Components/CreateContact/CreateContact";
import UpdateContacts from "./Components/UpdateContact/UpdateContact";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <AllContacts></AllContacts>
          </Route>
          <Route exact path="/createContact">
            <CreateContact></CreateContact>
          </Route>
          <Route exact path="/updateContact/:id">
            <UpdateContacts></UpdateContacts>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
