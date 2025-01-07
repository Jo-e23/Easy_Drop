import { useNavigate } from "react-router";
const Signup=() =>{

  let navigate= useNavigate();

    function signup(){

    navigate('/Login')
     
    }



        return (
          <>
    
          <h1>Signup</h1>
          <label>Username:</label>
          <input type='Username' placeholder='Username'/>
          <br></br>
          <br></br>
          <label>Email id:</label>
          <input type='email' placeholder='email'/>
          <br></br>
          <br></br>
          <label>Password:</label>
          <input type='Password' placeholder='Password'/>
          <br></br>
          <br></br>
          <button onClick={signup}>Signup</button>
              
             
          </>
        )
      }
      
      export default Signup;
      