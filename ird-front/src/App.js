import MainLayout from "./components/MainLayout";
import "./Styles/styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Questionnaires">
          <MainLayout
            Title="Questionnaires Explorer"
            Description="View All Questionnaire templates"
          >
            Questionnaires Explorer
          </MainLayout>
        </Route>
        <Route path="/">
          <MainLayout
            Title="Questionaires Explorer"
            Description="View All Questionnaire templates"
          >
            Questionnaires Explorer
          </MainLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
