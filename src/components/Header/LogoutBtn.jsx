import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";  
import {logout} from "../../store/authSlice";

export default function LogoutBtn(){
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout()
        .then(() => dispatch(logout()))
    }

    return <button 
    onClick={logoutHandler}
    className='transition-all py-1 z-10 px-4 border-2 rounded-md border-lightP hover:shadow-violet btn'>
        logout
        </button>

}