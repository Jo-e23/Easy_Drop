import { useNavigate } from "react-router";

const  Dashboard=()=>{
    let navigate = useNavigate();

    function logout(){
        localStorage.clear();
        navigate('/Login')
    }
    return(
        
       <div>
        <h1>DashBoard</h1>
        <button onClick={logout}>Logout</button>
       </div>
         )
}
export default Dashboard;