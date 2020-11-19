import React, { useState } from 'react';

const Home = (props) => {
    const [username,setUsername] = useState("");
    const handleClick = ()=>{
        props.history.push(`/repos/${username}`)
    }
   
    return (<>

    <input name="username" id="username" value={username} onChange={(event)=> setUsername(event.target.value)}/>
    <button onClick = {handleClick}>Search</button>
    </>
    );
}
 
export default Home;