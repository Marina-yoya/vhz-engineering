import * as authService from '../../services/authService';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { useEffect } from 'react';

const Logout = () => {
    
    const history = useHistory()
    const { user, logout } = useAuthContext();
    
    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                logout();
                history.push('/')
            })
    }, [])

    return null;
};

export default Logout;