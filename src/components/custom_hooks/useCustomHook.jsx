import {useState, useEffect} from 'react';

export function useCustomHook(){
    const [users, setUsers]= useState([]);
    const [search, setSearch]= useState("");

    async function fetchApiHandler(){
        try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok){
            throw new Error("User not found/server error");
        }
        const data = await response.json();
        setUsers(data);

        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
     fetchApiHandler();
    }, [])

    return { users, search, setSearch}
}