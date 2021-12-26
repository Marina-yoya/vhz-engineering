import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';
import { useEffect } from 'react';

const Logout = () => {
    
    const { user, logout } = useAuthContext();
    
    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                logout();
                
            })
    }, [])

    return null;
};

export default Logout;