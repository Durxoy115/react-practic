import { useState } from "react"

export default  function Counter(){
    const [count, setCount] = useState(0);
    const handleAdd = ()=>{
        const newCount = count + 2;
        setCount (newCount);
    }
    const  handleReduce = () =>{
       const newCount = count - 3;
        setCount(newCount);
    }
     return(
        <div style={{border: '2px solid green', background: 'white'}}>
            <h3 style={{color: 'black'}}>Counter:  {count} </h3>
            <button onClick={handleAdd}>ADD</button>
            <button style={{margin: '3px'}} onClick={handleReduce}>SUB</button>
            
        </div>
     )
}