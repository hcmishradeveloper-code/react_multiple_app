import {useState} from 'react';


function VirtulizationList({list, height, width, itemHeight}){

    const [indices, setIndices]= useState([0, Math.floor(height / itemHeight)])
    const visibleList = list.slice(indices[0], indices[1])

    function handleScroll(e){
        const {scrollTop} = e.target;
        const startIndex = Math.floor(scrollTop / itemHeight);
        const endIndex = startIndex + Math.floor(height/itemHeight);
        setIndices([startIndex, endIndex])
    }

    return(
        <div onScroll={handleScroll} style={{height, width, background:'lightgreen', overflow:"auto"}}>
            <div style={{height:list.length * itemHeight, position:"relative"}}>
             {
                visibleList.map((item, index)=>(
                    <div key={index+1} 
                    style={{height:itemHeight, 
                    background:'skyblue', 
                    borderTop:"4px solid grey", 
                    position:'absolute', 
                    top:(indices[0]+ index) * itemHeight, 
                    width:"95%", padding:"5px"}}
                    >
                        {"Item-" + item}
                    </div>
                ))
             }
            </div>
            <div style={{marginTop:'1rem'}}>
            </div>
        </div>
    )
}
export default VirtulizationList;