import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
    <style>{`
         .navigation {
          padding: 10px 40px;
          display: flex;
          flex-direction: column;
        }

        .nav-link {
          text-decoration: none;
          color: black;
          margin-bottom: 8px;
        }

        .nav-link:hover {
          color: blue;
        }

        .section-heading {
          margin-top: 15px;
          margin-bottom: 10px;
          font-size:18px;
        }
      `}</style>
    <div className="navigation">         
      <p>
        <i>Different App collection <strong> Main Page</strong></i>
      </p>
      <br/>
      <Link className="nav-link" to="/quizApp">1. QuizApp</Link>
      <Link className="nav-link" to="/stop_watch">2. Stop Watch</Link>
      <Link className="nav-link" to="/redux">3. Redux Todos</Link>
      <Link className="nav-link" to="/debounce_search">4. Debounce Table Search</Link>
      <Link className="nav-link" to="/filter_table_pagination">5. Filter Table Pagination</Link>
      <Link className="nav-link" to="/ticket_status">6. Ticket Status Display</Link>
      <Link className="nav-link" to="/checkout_wirzed">7. Checkout Wirzed Review</Link>
      <Link className="nav-link" to="/filter_query_param">8. Clicked to API query param search</Link>
      <Link className="nav-link" to="/crud_operation">9. Performing CRUD opertation in user list</Link>
      <Link className="nav-link" to="/custom_hook">10. Implementation of custom Hooks </Link>
      <Link className="nav-link" to="/virtulaization">11. Virtulization List display</Link>
      <Link className="nav-link" to="/drag_and_drop">12. Drag and Drop Feature Presentation</Link>
      <Link className="nav-link" to= "/stepper">13. React Stepper Practice</Link>
      <Link className="nav-link" to= "/kanban_board">14. React Kanban board with Tailwind CSS </Link>
      <span className="section-heading"><i>Screens</i></span>
      <Link className="nav-link" to="/user_back_red">I. Clicked table background Red</Link>
      <Link className="nav-link" to="/display_colors">II. Display Color on Click </Link>
      <Link className="nav-link" to="/progress_bar">III. ProgressBar App </Link>
      <Link className="nav-link" to="/dynamic_input">IV. Dynamic Input Fields </Link>

    </div>
    </>
  );
}
export default Navigation;
