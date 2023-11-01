import {useState} from 'react'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {login as sliceLogin} from '../store/authSlice'
import {useNavigate,Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {Input,Button} from './index'



export default function Login(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register,handleSubmit} = useForm()
    const [error,setError] = useState('')

    const sessionLogin = async (data) =>{
        setError('')
        try{const session = authService.login(data)
        if(session){
            const userData = authService.getUser()
            dispatch(sliceLogin(userData))
            navigate('/')
        }}catch(error){
            setError(error.message)
        }
    }

    return (
        <div>
            <div>
                <div>
                    <h1>Sign In to your account</h1>
                    <Link to='/signup'>
                    <p>Dont have an account?</p>
                    </Link>
                </div>
                <form onSubmit={handleSubmit(sessionLogin)}>
                    <div>
                        <Input 
                        label='Email:'
                        placeholder='Email...'
                        type='email'
                        {...register('email',{
                            required:true,
                            pattern:/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm    
                        })}
                        />
                        <Input
                        label='Password:'
                        type='password'
                        placeholder='Password...'
                        {...register('password',{
                            required:true,
                        })}
                        />
                        <Button
                        type='submit'
                        className='w-full'
                        >Sign In
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}