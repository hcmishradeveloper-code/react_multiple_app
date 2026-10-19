import VirtulizationList from "./VirtulizationList"
import {Link} from 'react-router-dom';

function MainVartual(){
    let list = Array.from({length:100}, (_, index)=> index + 1);

    return(
        <div>
            <VirtulizationList list={list} height={400} width={300} itemHeight={35}/>
            <Link to="/">Return to Home</Link>
        </div>
    )
}
export default MainVartual;