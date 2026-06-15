import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth'
import  {login , logout} from './store/authSlice'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  
  const [loading , setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false));
  }, [])

  return !loading ? (
    <>
    
    <Header/>
    <div className='min-h-screen bg-red-500 flex flex-wrap'>hello</div>
    <Footer/>
    </>
  ) : null
}

export default App
