import { useNavigate } from "react-router";
const Login =()=>{
    let navigate = useNavigate();


function login()
  {
       navigate('/Dashboard');
  }

return(
      <>
      <h1>Login</h1>
      <label>Email id :</label>
       <input type="email" placeholder="Email" />
       <br></br>
      <br></br>
      <label>Password:</label>
      <input type='Password' placeholder='Password' />

      <br></br>
      <br></br>
      <button onClick={login}>Login</button>


      </>
    )
}
export default Login;