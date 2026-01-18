import React ,{useContext} from 'react'
import UserContext from '../context/UserContext.js'

function Profile(){
    const {user} = useContext(UserContext)
    if(!user) return <div>please login</div>
    
    return <div className='bg-blue-100 border-2 border-black-500 rounded-md px-4 py-2'>Welcome {user.username}</div>
}

export default Profile