import React from "react";
import Feed from "../components/Feed";
import Header from "../components/layout/Header";
import Login from "./Login";
import Sidebar from "../components/Sidebar";
import { useStateValue } from "../components/StateProvider";

function App() {
  const [{ user }] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
