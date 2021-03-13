import MainLayout from "./components/MainLayout";
import "./Styles/styles.css";
import { BrowserRouter as Router, Route, Switch , useParams , useRouteMatch, } from "react-router-dom";
import QExplorer from "./components/Pages/QExplorer";
import QGeneralInfo from "./components/Pages/QGeneralInfo";
import QRespondentFormat from "./components/Pages/QRespondentFormat";

function App() {

  return (
    <Router>
      <Switch>
      <Route path = "/CQ/QuestionaireEditor">
          <MainLayout
              Title= "Questionaire Editor"
              Description=""
            >
              
            </MainLayout>
        </Route>
      <Route path = "/CQ/CreateRespondentCode">
          <MainLayout
              Title="Create New Respondent Code"
              Description="Define the format of a respondent code and how to use it"
            >
              <QRespondentFormat></QRespondentFormat>
            </MainLayout>
        </Route>
      <Route path = "/CQ/SelectRespondentCode">
          <MainLayout
              Title="Select Respondent Code"
              Description="Respondent code uniquely identifies each response of a questionaire"
            >
              
            </MainLayout>
        </Route>
        <Route path = "/CQ/GeneralInformation">
          <MainLayout
              Title="Create Questionaire"
              Description="General Infromation"
            >
              <QGeneralInfo
                ClassName = "TextInput"
                Label = "Sample"
                InputType = "input"
              >
              </QGeneralInfo>
              
            </MainLayout>
        </Route>
        <Route path="/Questionnaires">
          <MainLayout
            Title="Questionnaires Explorer"
            Description="View All Questionnaire templates"
          >
            <QExplorer/>
          </MainLayout>
        </Route>
        <Route path="/">
          <MainLayout
            Title="Questionaires Explorer"
            Description="View All Questionnaire templates"
          >
             <QExplorer/>
          </MainLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
