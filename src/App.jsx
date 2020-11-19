import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import RepoDetails from './components/RepoDetails';
import Followers from './components/Followers'
import Dummy from'./components/Dummy'
import Repos from './components/Repos';
import User from "./components/User"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
           
            <Switch>
                
                <Route exact path="/repos/:username" component={User,Repos}/>
              
                <Route path="/repos/:username/:reponame" component={RepoDetails}/>

                <Route path="/followers/:username" component={Followers}/>
                <Route path="/" component={Home}/>
                
            </Switch>
        );
    }
}
 
export default App;