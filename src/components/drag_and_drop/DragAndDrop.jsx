import {useState,useRef} from 'react';


function DragAndDrop({initialData}){
    const [data, setData] = useState(initialData)
    const dragItem = useRef();
    const dragContainer = useRef();

    const handleDragStart=(e, item, container)=>{
       dragItem.current = item;
       dragContainer.current = container;
       e.target.style.opacity= "0.3";
    }

    const handleDragEnd=(e)=>{
      e.target.style.opacity= "1";
    }

    const handleDrop=(e, targetContainer)=>{
        const item = dragItem.current;
        const sourceContainer = dragContainer.current;
        setData((prev)=>{
            const newData = {...prev}
            newData[sourceContainer] = newData[sourceContainer].filter((i)=> i !== item);
            newData[targetContainer] = [...newData[targetContainer], item];
            return newData;
        })
    }
    const handleDragOver=(e)=>{
        e.preventDefault()
    }

    return(
        <div style={{display:"flex", justifyContent:"space-around", width:'650px'}}>
           {
            Object.keys(data).map((container, index)=>(
                <div key={index+1}
                 onDrop = {(e)=>handleDrop(e, container)}
                 onDragOver = {handleDragOver}
                style={{
                    background:'#C0C0C0',
                    padding:"2rem", 
                    width:350, 
                    minHight:350
                }}
                >
                    <h3 style={{marginBottom:"10px"}}>{container}</h3>
                    {
                      data[container].map((item, idx)=>(
                        <div key={idx+1}
                        draggable
                        onDragStart={(e)=>handleDragStart(e, item, container)}
                        onDragEnd={handleDragEnd}
                        style={{
                            padding:12, 
                            margin:'0px 0px 8px 0px', 
                            background:"white", 
                            cursor:'move',
                            borderRadius:'6px'
                        }}
                        >{item}</div>
                      ))  
                    }
                </div>
            ))
           }
        </div>
    )
}
export default DragAndDrop;