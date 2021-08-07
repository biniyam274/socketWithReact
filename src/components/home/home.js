import React, {useState} from "react";
import "./home.scss";
import {Link} from "react-router-dom";

function Home({socket}) {
    const [username, setusername] = useState("");
    const [roomname, setroomname] = useState("");
    //activates joinRoom function defined on the backend
    const sendData = () => {
        if (username !== "" && roomname !== "") {
            socket.emit("joinRoom", {username, roomname});
            //if empty error message pops up and returns to the same page
        } else {
            alert("username and roomname are must !");
            window.location.reload();
        }
    };

    return (
        <div className="homepage">
            <h1>Welcome to Benja's ChatApp</h1>
            <input
                placeholder="Input your user name" value={username}
                onChange={(e) => {
                    setusername(e.target.value)
                    if (e.key === "Enter") {
                        sendData()
                    }
                }}
            />
            <input
                placeholder="Input the room name"
                value={roomname}
                onChange={(e) => {
                    setroomname(e.target.value)

                }}
            />
            <Link to={`/chat/${roomname}/${username}`}>
                <button onClick={sendData}>Join</button>
            </Link>
        </div>
    );
}

export default Home;