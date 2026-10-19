import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import QuizApp from "./components/quiz_app/QuizApp";
import StopWatch from "./components/stopwatch/StopWatch";
import Home from "./components/redux/Main";
import DebounceTableSearch from "./components/table_debounce/DebounceTableSearch";
import TablePaginationAndFilter from "./components/table_pagination/TablePaginationAndFilter";
import TicketStatusDisplay from "./components/ticket_status/TicketStatusDisplay";
import CheckoutWirzed from "./components/checkout_wirzed/CheckoutWirzed";
import UserSearch from "./components/filter_query_param/UserSearch";
import CRUDMain from "./components/crud_operations/CRUDMain";
import UserInfo from "./components/custom_hooks/UserInfo";
import MainVartual from "./components/virtulaization/MainVartual";
import Main from './components/drag_and_drop/Main';
import MainStepper from "./components/react_stepper/MainStepper";
import TableBackgroundChange from "./screens/background_change/TableBackgroundChange";
import DisplayColors from "./screens/circle_color_change/DisplayColors";
import DynamicInputs from "./screens/dynamic_input/DynamicInputs";
import ProgressBar from "./screens/progressbar/ProgressBar";
import MainKanban from "./components/react_kanban_board/MainKanban";
import "./index.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/quizApp" element={<QuizApp />} />
        <Route path="/checkout_wirzed" element={<CheckoutWirzed />} />
        <Route path="/crud_operation" element={<CRUDMain />} />
        <Route path="/custom_hook" element={<UserInfo/>} />
        <Route path="/drag_and_drop" element={<Main/>}/>
        <Route path="/filter_query_param" element={<UserSearch />} />
        <Route path="/stepper" element={<MainStepper/>}/>
        <Route path="/redux" element={<Home />} />
        <Route path="/stop_watch" element={<StopWatch />} />
        <Route
          path="/filter_table_pagination"
          element={<TablePaginationAndFilter />}
        />
        <Route path="/ticket_status" element={<TicketStatusDisplay />} /> 
        <Route path="/virtulaization" element={<MainVartual/>} />
        <Route path="/background_change" element={<TableBackgroundChange />} />
        <Route path="/display_colors" element={<DisplayColors />} />
        <Route path="/dynamic_input" element={<DynamicInputs />} />
        <Route path="/progress_bar" element={<ProgressBar />} />
        <Route path="kanban_board" element={<MainKanban/>} />
        <Route path="/debounce_search" element={<DebounceTableSearch />} />
      </Routes>
    </Router>
  );
}
