import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext.js'

function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit =(e) => {
            e.preventDefault()
            setUser({username,password})
        }

    return(
        <div>
            <h2 className='bg-yellow-100 border-2 border-blue-500 rounded-md px-4 py-2'>Login</h2>
            <input type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='username'
            className='text-white border-2 border-blue-500 rounded-md px-4 py-2' />

            <input type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            className='text-white border-2 border-blue-500 rounded-md px-4 py-2' />

            <button onClick={handleSubmit} className='bg-green-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-green-600'>Submit</button>
        </div>
    )
}

export default Login