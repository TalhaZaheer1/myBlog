import { useDispatch } from "react-redux";
import {useState} from "react"
import authService from "../appwrite/auth";  
import {login} from "../store/authSlice"
import {useForm} from "react-hook-form"
import { useNavigate,Link } from "react-router-dom";
import {Input,Button} from "./index"

export default function SignUp(){
    const [error,setError] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register,handleSubmit} = useForm()

    const newSignUp = async (data) => {
        setError('')
        try{
            const userData = await authService.createAccount(data)
            if(userData){
                dispatch(login(userData))
                navigate('/')
            }
        }catch(error){
            setError(error.message)
        }
    }

    return(
        <div>
            <div>
                <h1>Create Your Account</h1>
                <Link to="/login">
                <p>Already have an account?</p>
                </Link>
                <form onSubmit={handleSubmit(newSignUp)}>
                    <div>
                        <Input
                        label="Name"
                        placeholder="your name..."
                        {...register("name",{
                            required:true
                        })}
                        />
                        <Input
                        label="Email:"
                        type="email"
                        placeholder="Email..."
                        {...register("email",{
                            required:true,
                            pattern:/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm
                        })}
                        />
                        <Input
                        label="Password:"
                        type="password"
                        placeholder="Password..."
                        {...register("password",{
                            required:true
                        })}
                        />
                        <Button>Sign Up</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
