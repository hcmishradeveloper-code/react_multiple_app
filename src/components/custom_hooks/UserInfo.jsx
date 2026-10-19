import React from 'react';
import {useCustomHook} from './useCustomHook';
import {Link} from "react-router-dom";

function UserInfo(){
    const {users, search, setSearch} = useCustomHook()
    
    const filtered = [...users].filter((user)=>{
        return user.name.toLowerCase().includes(search.toLowerCase())
    })

    return(
        <div style={{paddingLeft:"4rem"}}>
            <h3 style={{margin:"10px 0px"}}>Users Information</h3>
            <div>
                <input type="text" 
                placeholder="Search Users..."  
                value={search} 
                onChange={(e)=>setSearch(e.target.value)}
                style={{width:'250px', padding:"5px", borderRadius:'9px', marginBottom:'5px'}}
                />
            </div>
            {
              filtered.length === 0 ? <h3>No Search User found</h3> : (
               filtered.map((user)=>(
                <ui key={user.id} style={{listStyleType:'none'}}>
                    <li>{user.name}</li>
                </ui>
               ))

              )  
            }
            <div>
                <Link to ="/">Return To home Page</Link>
            </div>
        </div>
    )
}
export default UserInfo;