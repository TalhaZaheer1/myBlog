import LogoutBtn from "./LogoutBtn"
import {Container} from "../index"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


export default function Header(){
    const activeStatus = useSelector(state => state.loginStatus)
    
    const navItems = [
        {
            name:'Home',
            slug:'/',
            active:true
        },
        {
            name:'Sign Up',
            slug:'/',
            active:!activeStatus
        },
        {
            name:'Log In',
            slug:'/',
            active:!activeStatus
        },
        {
            name:'All Posts',
            slug:'/allposts',
            active:activeStatus
        },
    ]

    return (
           <Container>
        <div className="px-4 m-auto w-11/12 mt-3 bg-white rounded-lg h-14 border-neo-red border-4">
                <nav className="flex justify-between items-center">
                    <img className="w-12" src="https://img.freepik.com/free-vector/hand-drawn-flat-design-anarchy-symbol_23-2149244760.jpg?w=826&t=st=1698815606~exp=1698816206~hmac=bf157493e2e5a351163b48e72630eeed4d0e5b37dcaf85656fe489d1186877c6" alt="logo" />
                    <ul className="flex item-center justify-evenly gap-2 font-semibold">
                        {navItems.map(item => 
                            item.active ? (
                                <li key={item.name}>
                                    <button 
                                       // use navigate to slug 
                                    className="transition-all py-1 z-10 px-4 border-2 rounded-md border-lightP hover:shadow-violet btn" >
                                    
                                        {item.name}
                                    </button>
                                </li>
                            ) : null)}
                        {activeStatus && <LogoutBtn />}    
                    </ul>
                </nav>
        </div>
           </Container>
    )
}