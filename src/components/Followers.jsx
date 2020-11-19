import axios from "axios";
import React,{useState,useEffect} from"react";


const Followers = (props) => {
    const [followersData,setFollowersData] = useState(null);
    const getData = async()=>{
        const {data} = await axios.get(`https://api.github.com/users/${props.match.params.username}/followers`);
        setFollowersData(data);
        console.log(data)
    }
    console.log(props.history)
   
  
console.log("user called"); 
useEffect(getData,[]);

const handleFollower = (followerName)=>{
   
    props.history.push(`/repos/${followerName}`)
}
return <>

<h2> {`Followers Of ${props.match.params.username}`}</h2>
<div className="followerMain">
{followersData ===null ? null: followersData.map(follower=> 
    <div className="follower" key={follower.id}> 
    <img src={follower.avatar_url} className={'my-custom-image'} alt={"Repo image"}/>
    <h3 onClick = {(()=> handleFollower(follower.login))}><span>&nbsp;&nbsp;&nbsp;</span>{follower.login}</h3>
    </div>
    )

}
</div>

</>;
}
 
export default Followers;