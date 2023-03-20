import React from "react";
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';

import { Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./Pages/Home";
import Feed from "./Pages/Feed";
import About from "./Pages/About";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./hooks/useAuth";

function App() {
   const { authed, loading } = useAuth();

   return (
      <div className="App">
         <Navigation />

         {loading ? (
            <div> Loading... </div>
         ) : (
            <>
               
               <Switch>
                  <Route path="/" exact component={Home} />
                  <ProtectedRoute path="/feed" exact component={Feed} />
                  <Route path="/about" exact component={About} />
               </Switch>
            </>
         )}
      </div>
   );
}

export default App;
