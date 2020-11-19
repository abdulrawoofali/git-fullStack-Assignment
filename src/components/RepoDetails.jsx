import axios from "axios";
import React from 'react';
import { useEffect } from "react";
import {markdown} from "markdown";

const RepoDetails = (props) => {

    const [data, setData] = React.useState({});

    useEffect(() => {
        async function getData() {
            const {username, reponame} = props.match.params;
            const {data} = await axios.get(`https://api.github.com/repos/${username}/${reponame}/readme`);
            //console.log(data);
            setData(data);
        }

        getData();
     }, []);

     if(!data || !data.content) {
         return null;
     }

     //console.log(markdown.toHTML(window.atob(data.content)));


    return (<div dangerouslySetInnerHTML={{__html: markdown.toHTML(window.atob(data.content))}}></div>);
}
 
export default RepoDetails;