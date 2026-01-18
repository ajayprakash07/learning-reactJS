import React from 'react';
import UserContext from './UserContext';
import { useState } from 'react';

const UserContextProvider= ({children}) => {
    const [user, setUser] = useState(null);

    return(
        <UserContext.Provider val={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider