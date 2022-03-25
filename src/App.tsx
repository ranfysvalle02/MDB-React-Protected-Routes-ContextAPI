import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Login from "./components/Login";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Feed from "./Pages/Feed";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./hooks/useAuth";
import About from "./Pages/About";

function App() {
   const { authed, loading } = useAuth();

   return (
      <div className="App">
         <Navbar />
         {authed ? <Logout /> : <Login />}

         {loading ? (
            <div> Loading... </div>
         ) : (
            <>
               <div className="auth-status-content">
                  <span>
                     Auth Status: {authed ? "Logged In" : "Not Logged In"}
                  </span>
               </div>

               <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/about" exact component={About} />
                  <ProtectedRoute path="/feed" exact component={Feed} />
               </Switch>
            </>
         )}
      </div>
   );
}

export default App;
