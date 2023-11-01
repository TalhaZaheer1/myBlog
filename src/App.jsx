import {useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import authService from './appwrite/auth'
import {login,logout} from './store/authSlice'
import {Header,Footer,Card} from './components/index'
import {Outlet} from 'react-router-dom'

function App() {
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getUser()
    .then(data => {
      if(data){
        dispatch(login(data))
      }else{
        dispatch(logout())
      }})
      .finally(() => {
        setLoading(false)
      })
  },[])


  return !loading ? (
    <div className='min-h-screen bg-violet-500 flex flex-wrap content-between'>
      <div className='w-full block'>
        <Header />
          <Outlet />
          <Card />
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
