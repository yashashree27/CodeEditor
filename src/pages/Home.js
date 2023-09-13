import React from 'react'

const Home = () => {
  return <div className="homePageWrapper">
     <div className="formWrapper">
        <img src="/code-sync.png" alt="code-sync-logo" />
        <h4 className="mainLabel">Paste Invitation ROOM ID</h4>
        <div className="input-group">
          <input type="text" 
          className="inputBox" 
          placeholder="ROOM ID"
          />
          <input type ="text"
          className="inputBox"
          placeholder="Username"
          />
         <button className="btn joinBtn">Join</button>
         <span className="createInfo">
          If you don't have an invite then create &nbsp;
          <a href="" className="createNewBtn">
            new Room
          </a>
         </span>
        </div>
     </div>
     <footer>
      <h4>2023</h4>
     </footer>
  </div>;
};

export default Home


