import MainLayout from "./components/MainLayout";
import "./Styles/styles.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import QExplorer from "./components/Pages/QExplorer";
import QGeneralInfo from "./components/Pages/QGeneralInfo";
import QRespondentFormat from "./components/Pages/QRespondentFormat";
import AddQuestion from "./components/Pages/AddQuestion";
import CreateQuestion from "./components/Pages/CreateQuestion";
import QuestionFormat from "./components/Pages/QuestionFormat";
import TextQuestion from "./components/Pages/TextQuestion";
import ChoiceQuestion from "./components/Pages/ChoiceQuestion";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/CQ/AQ/AddQuestion">
          <MainLayout
            bgColor="black"
            Title="Add A Question"
            Description="Select the type of question"
          >
            <AddQuestion></AddQuestion>
          </MainLayout>
        </Route>
        <Route path="/CQ/AQ/CreateQuestion">
          <MainLayout
            bgColor="black"
            Title="Create New Question"
            Description="Select the type of question"
          >
            <CreateQuestion></CreateQuestion>
          </MainLayout>
        </Route>
        <Route path="/CQ/AQ/QuestionFormat">
          <MainLayout
            bgColor="black"
            Title="Pick A Question Format"
            Description="Select the type of question"
          >
            <QuestionFormat></QuestionFormat>
          </MainLayout>
        </Route>
        <Route path="/CQ/QT/CreateTextQuestion">
          <MainLayout
            Title="Create New Text Question"
            Description="Enter Question Details"
          >
            <TextQuestion></TextQuestion>
          </MainLayout>
        </Route>
        <Route path="/CQ/QT/CreateChoiceQuestion">
          <MainLayout
            Title="Create New Choice Question"
            Description="Enter Question Details"
          >
            <ChoiceQuestion></ChoiceQuestion>
          </MainLayout>
        </Route>
        <Route path="/CQ/QuestionaireEditor">
          <MainLayout Title="Questionaire Editor" Description=""></MainLayout>
        </Route>
        <Route path="/CQ/CreateRespondentCode">
          <MainLayout
            Title="Create New Respondent Code"
            Description="Define the format of a respondent code and how to use it"
          >
            <QRespondentFormat></QRespondentFormat>
          </MainLayout>
        </Route>
        <Route path="/CQ/SelectRespondentCode">
          <MainLayout
            Title="Select Respondent Code"
            Description="Respondent code uniquely identifies each response of a questionaire"
          ></MainLayout>
        </Route>
        <Route path="/CQ/GeneralInformation">
          <MainLayout
            Title="Create Questionaire"
            Description="General Infromation"
          >
            <QGeneralInfo
              ClassName="TextInput"
              Label="Sample"
              InputType="input"
            ></QGeneralInfo>
          </MainLayout>
        </Route>
        <Route path="/Questionnaires">
          <MainLayout
            Title="Questionnaires Explorer"
            Description="View All Questionnaire templates"
          >
            <QExplorer />
          </MainLayout>
        </Route>
        <Route path="/">
          <MainLayout
            Title="Questionaires Explorer"
            Description="View All Questionnaire templates"
          >
            <QExplorer />
          </MainLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
