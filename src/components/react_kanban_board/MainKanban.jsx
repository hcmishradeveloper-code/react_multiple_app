import KanbanBoard from "./KanbanBoard";
import {Link} from 'react-router-dom';

const datas = {
    todo:{
        name:"To Do",
        items: [
            {id:"1",content:'Market Research' },
            {id:"2",content:'Write Projects' },
        ],
    },
    InProgress:{
        name:"In Progress",
        items: [
            {id:"3",content:'Design UI Mockup' },
            {id:"4",content:'Writing the Unit text' },
        ],
    },
    done:{
        name:"Done",
        items: [
            {id:"5",content:'CI/CD pipeline' },
            {id:"6",content:'repository setup' },
        ],
    }
}

function MainKanban(){
    return(
        <div>
          <KanbanBoard datas={datas}/>
          <Link to="/">Return to Home page</Link>
        </div>
    )
}
export default MainKanban;