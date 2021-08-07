import Chat from "./components/chat/chat";
import Process from "./components/process/process";
import Home from "./components/home/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import React ,{Fragment} from "react";
import io from "socket.io-client";

const socket = io.connect('/');

function MainApp(props) {

    console.log(props)
    return (
        <Fragment>
                    <div className="container">
                <div className="right">
                    <Chat
                        username={props.match.params.username}
                        roomname={props.match.params.roomname}
                        socket={socket}
                    />
                </div>
                <div className="left">
                    <Process />
                </div>
            </div>
        </Fragment>
    );
}

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact>
                        <Home socket={socket} />
                    </Route>
                    <Route path="/chat/:roomname/:username" component={MainApp} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;