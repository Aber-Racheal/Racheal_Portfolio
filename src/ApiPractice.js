import React, {useState, useEffect} from "react";


const DisplayData=()=>{
    const[items, setItems]= useState([])
    const [loading, setLoading]= useState(true)
    const [error, setError]= useState(null)





useEffect (()=>{
    const fetchData= async()=>{
        try{
            const response = await fetch('https://api.example.com/items')

            if(!response.ok){
                throw new Error ("Network Problem")
            }
            const data = await response.json()
            setItems(data)
        }
        catch(error){
            setError(error.message)

        }
        finally{
            setLoading(false)
        }
    }
    fetchData()
}

,[])

if (loading){
    return(
        <div>Loading...
        </div>
    )
}

if(error){
    return(
        <div>Error:{error}</div>
    )
}


return (
    <ul>
        {items.map(item=>(
            <li key={item.id}>{item.name}</li>
        ))}
    </ul>
)
}

export default DisplayData;