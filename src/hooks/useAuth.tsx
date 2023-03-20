import React, { useState, createContext, useContext, useEffect } from "react";
import * as Realm from "realm-web";
// Create the context
const AuthContext = createContext(null);

const app = Realm.getApp("__YOUR_APP_ID__");

export const AuthProvider = ({ children }) => {
   const [authed, setAuthed] = useState<boolean>(app.currentUser?true:false);
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
      await app.currentUser.logOut();
      console.log("The User has logged out");
      sessionStorage.setItem("_token", "");
   };

   const register = async (registerEmail:string,registerPassword:string): Promise<void> => {
      setAuthed(false);
      await app.emailPasswordAuth.registerUser({email:registerEmail,"password":registerPassword});
      alert("Successfully registered!");
   };

   return (
      // Using the provider so that ANY component in our application can
      // use the values that we are sending.
      <AuthContext.Provider
         value={{ authed, setAuthed, login, logout, loading, register }}
      >
         {children}
      </AuthContext.Provider>
   );
};

export const useAuth = () => useContext(AuthContext);
