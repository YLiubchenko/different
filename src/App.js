import './App.css';
import Weather from "./components/Weather";
import Clock from "./components/Clock";
import CountSalaryTable from "./components/SalaryTable/CountSalaryTable";
import TicTac from "./components/tictac/TicTac";
import ExamOneByOne from "./components/examOneByOne/ExMain";
import ExamRadio from "./components/examRadioAnswers/ExamRadio";
import ToDoList from "./components/todo/ToDoList";
import Dropdown from "./components/drop/Dropdown";
import {Link, Route, Switch} from "react-router-dom";
import ExamOneLine from "./components/exam/ExamOneLine";
import {CalenderOrganizer} from "./components/Calenders/CalenderOrganizer";
import Notification from "./components/Notification";


function App() {
    return (
        <div className="App">
            <nav>
                <ul>
                    <li>
                        <Link to={'/to-do-list'}>to-do list</Link>
                    </li>
                    <li>
                        <Link to={'/weather'}>weather</Link>
                    </li>
                    <li>
                        <Link to={'/time-now'}>time now</Link>
                    </li>
                    <li>
                        <Link to={'/dropdown'}>dropdown</Link>
                    </li>
                    <li>
                        <Link to={'/table-count-salary'}>table count salary</Link>
                    </li>
                    <li>
                        <Link to={'/exam-in-one-column'}>exam in one column</Link>
                    </li>
                    <li>
                        <Link to={'/exam-one-by-one'}>exam one by one</Link>
                    </li>
                    <li>
                        <Link to={'/exam-choice-radio-btn'}>exam choice radio btn</Link>
                    </li>
                    <li>
                        <Link to={'/tic-tac-toe'}>tic-tac-toe</Link>
                    </li>
                    <li>
                        <Link to={'/calendar'}>Calendar-organizer</Link>
                    </li>
                    <li>
                        <Link to={'/notification'}>Notification</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path={'/to-do-list'} className='container'>
                    <h1>My to-do-list</h1>
                    <ToDoList/>
                </Route>

                <Route path={'/weather'}>
                    <Weather/>
                </Route>

                <Route path={'/time-now'}>
                    <h2>Time now</h2>
                    <Clock/>
                </Route>

                <Route path={'/dropdown'}>
                    <Dropdown/>
                </Route>

                <Route path={'/table-count-salary'}>
                    <CountSalaryTable/>
                </Route>

                <Route path={'/exam-in-one-column'}>
                    <ExamOneLine/>
                </Route>

                <Route path={'/exam-one-by-one'}>
                    <ExamOneByOne/>
                </Route>

                <Route path={'/exam-choice-radio-btn'}>
                    <ExamRadio/>
                </Route>

                <Route path={'/tic-tac-toe'}>
                    <TicTac/>
                </Route>
                <Route path={'/calendar'}>
                    <CalenderOrganizer />
                </Route>
                <Route path={'/notification'}>
                    <Notification />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
