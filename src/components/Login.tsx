import * as React from "react";
import { useAuth } from "../hooks/useAuth";

function Login() {
   const { login } = useAuth();
   const [loginEmail, setLoginEmail] = React.useState("demo@demo.com");
   const [loginEmailPwd, setLoginEmailPwd] = React.useState("demo@demo.com");
   return (
      <div className="login-section">
         <input type="text" placeholder="demo@demo.com" value={loginEmail} onChange={(e)=>{
            setLoginEmail(e.target.value);
         }} />
         <input type="password" placeholder="demo@demo.com" value={loginEmailPwd} onChange={(e)=>{
            setLoginEmailPwd(e.target.value);
         }} />
         <button onClick={()=>login(loginEmail,loginEmail)}>Login</button>
      </div>
   );
}

export default Login;
