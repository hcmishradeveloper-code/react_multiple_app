import DragAndDrop from './DragAndDrop';
import {Link} from 'react-router-dom';

const initialData = {
    Todo:[
      "Design Ui mockup",
      "set up project ropository",
      "Write unit testing",
      "integrate payment gateway"
      ],
      "In Progress": [
        "Developer authentication flow", 
        "Implement redux toolkit",
        "Explain Project report"
      ],
      Completed:[
        "Set up CI/CD pipe ling",
        "Code review completed",
        "Deploy initial version to staging"
      ]
  }
  
function Main(){
    return(
        <div style={{marginLeft:'4rem'}}>
            <h2 style={{padding:"10px 0px"}}>Drag and Drop item from container Feature </h2>
            <DragAndDrop initialData={initialData}/>
            <Link to="/">Return to Home Page</Link>
        </div>
    )
}
export default Main;