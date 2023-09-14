import React, {useState} from 'react'
import Client from '../Components/Client';
import Editor from '../Components/Editor';

const EditorPage = () => {

  const [clients, setclients] = useState([
    { socketId:1, userName:'Yashashree M.'},
    { socketId:2, userName:'Yashvani s.'},
    { socketId:3, userName:'kanchan B.'},
  ]);

  return (
    <div className='mainWrap'>
      <div className='aside'>
        <div className='asideInner'>
          <div className='logo'>
            <img  
                className="logoImage"  
                src='/code-sync.png' 
                alt="logo"
            />
          </div>
          <h3>Connected</h3>
          <div className='clientList'>
              { clients.map((client) =>
               <Client
                 key ={client.socketId}
                 userName={client.userName}
               />
               )}
          </div>
        </div>
        <button className='btn copybtn'>Copy ROOM  ID</button>
        <button className='btn leavebtn'>Leave</button>
      </div>
      <div className='editorPage'>
         <Editor />
      </div>
    </div>
  )
}

export default EditorPage