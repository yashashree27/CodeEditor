import React, { useState } from "react";
import {v4 as uuid4} from "uuid"; 
import toast from "react-hot-toast"; // for notifications
import { useNavigate } from 'react-router-dom'; // for navigation to 

const Home = () => {

  const navigate = useNavigate();
  const [roomId, setRoomId] = useState('');
  const [userName, setUserName] = useState('')

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuid4();
    setRoomId(id);
    //console.log(id)
    toast.success('created a new room') // for notifications
  }

  const joinRoom = () =>{
    if(!roomId || !userName){
      toast.error('ROOM ID & username is required')
      return;
    }
    //redirecting  
    // we can pass data from one route to other  in react
    navigate(`/editor/${roomId}`,{
          state : {
               userName
          },
    }); 
  };

  const handleInputEnter = (e) =>{
    if(e.code =='Enter'){
         joinRoom();
    }
  };

  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img
           className="homePageLogo"
           src="/code-sync.png"
           alt="code-sync-logo"
        />
        <h4 className="mainLabel">Paste Invitation ROOM ID</h4>
        <div className="input-group">
          <input 
              type="text" 
              className="inputBox" 
              placeholder="ROOM ID" 
              value ={roomId}
              onChange ={(e)=> setRoomId(e.target.value)}
              onKeyUp={handleInputEnter}   //for enter 
              />
          <input 
              type="text" 
              className="inputBox" 
              placeholder="USERNAME" 
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              onKeyUp={handleInputEnter}
              />
          <button className="btn joinBtn" onClick={joinRoom}>Join</button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <a onClick={createNewRoom} href="" className="createNewBtn">
              new Room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>2023</h4>
      </footer>
    </div>
  );
};

export default Home;
