import React,{ useEffect, useState } from "react";
import axios from 'axios';
export default function User(props){
    const [data,setData] = useState("");
    const getData = async()=>{
        const {data} = await axios.get(`https://api.github.com/users/${props.match.params.username}`);
        setData(data);
        console.log(data)
    }
    console.log(props.history)
   
  
console.log("user called"); 
useEffect(getData,[]);

const handleFollower = ()=>{
    props.history.push(`/followers/${props.match.params.username}`)
}
return ( <>
<div className="User">
<h4>{data.name}</h4> 

<div className="flink" onClick = {handleFollower}> <h4>Followers:{data.followers}</h4></div>

</div>


</> );
}
 
