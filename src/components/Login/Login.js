import './Login.css'
import { useHistory } from 'react-router-dom';
import * as authService from '../../services/authService'
import { useAuthContext } from '../../contexts/AuthContext';
const Login = () => {

	const history = useHistory();
	const {login} = useAuthContext();
      const onLoginHandler = (e) => {
	  e.preventDefault();
	  let formData = new FormData(e.currentTarget);
	  let email = formData.get('email');
	  let password = formData.get('password');
	  
	  
	  authService.login(email, password).then((authData) => {
		login(authData);
		
		history.push('/')
	})
	.catch(err => {
		
		console.log(err);
	});
	 
  }


    return(
        <>
        <div className="wrapper"></div>
		<div className="grad"></div>
		<div className="header">
		
		</div>
		<br />
		<form className="login" onSubmit={onLoginHandler} method="POST">
			   <label htmlFor="email">Email</label>
			   <input type="text" placeholder="email" name="email" /> <br />
			   <label htmlFor="password">Password</label>
			   <input type="password" placeholder="*****" name="password" /> <br />
			   <input type="submit" value="Login" />
			
		</form>
        </>

    )
}

export default Login;