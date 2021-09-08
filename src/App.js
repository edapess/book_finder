import "./App.css";
import SearchSection from "./Components/SearchSection/SearchSection";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InfoSection from "./Components/InfoSection/InfoSection";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={SearchSection} />
          <Route path="/book_info" component={InfoSection} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
