import React, { useState, createContext, useContext, useEffect } from "react";
import * as Realm from "realm-web";

// Create the context
const AuthContext = createContext(null);

const app = Realm.getApp("__YOUR__APP__ID__");

export const AuthProvider = ({ children }) => {
   const [authed, setAuthed] = useState<boolean>(false);
   const [loading, setLoading] = useState<boolean>(true);
   async function loginEmailPassword(email:string, password:string) {
      // Create an e-mail/pwd credential
      const credentials = Realm.Credentials.emailPassword(email, password);
      try {
         // Authenticate the user
         const user = await app.logIn(credentials);
         return user
      } catch(err) {
         console.error("Failed to log in", err);
      }
   }
   const tryToLogin = async function(loginEmail:string,loginEmailPwd:string){
      try{
        const realmUser = await loginEmailPassword(loginEmail,loginEmailPwd);
        return realmUser;
      }catch(e){
        // TODO: double login does not trigger an error. find out how to track auth status elegantly
        console.log('e-login',e);
        return false;
      }
    };
   useEffect(() => {
      setLoading(false);
   }, []);

   const login = async (email:string,pwd:string): Promise<void> => {
      const result = await tryToLogin(email,pwd);
      if (result) {
         console.log("user has logged in",result);
         setAuthed(true);
         sessionStorage.setItem("_token", String(result['_accessToken']));
      }
   };

   const logout = async (): Promise<void> => {
      setAuthed(false);
      console.log("The User has logged out");
      sessionStorage.setItem("_token", "");
   };

   return (
      // Using the provider so that ANY component in our application can
      // use the values that we are sending.
      <AuthContext.Provider
         value={{ authed, setAuthed, login, logout, loading }}
      >
         {children}
      </AuthContext.Provider>
   );
};

export const useAuth = () => useContext(AuthContext);
