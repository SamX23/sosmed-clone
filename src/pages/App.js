import React from "react";
import Feed from "../components/Feed";
import Header from "../components/layout/Header";
import Login from "./Login";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import { useStateValue } from '../components/StateProvider'

function App() {
  const [{ user }, dispatch] = useStateValue()
  
  return (
    <div className="app">
      {!user ?
        (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Feed />
              <Widgets/>
            </div> 
          </>
      
      )}
    </div>
  );
}

export default App;
