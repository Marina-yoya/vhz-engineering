
import './Register.css';
import { useHistory } from 'react-router-dom';
import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';

const Register = () => {

	const history = useHistory();
	const {login} = useAuthContext();
	const onRegisterHandler = (e) => {
		e.preventDefault()
		let formData = new FormData(e.currentTarget);
		let email = formData.get('email');
		let password = formData.get('password');
		let rePass = formData.get('re-password');
		console.log(email, password);

		if(password !== rePass) {
			return alert('passwords are not the same')
		}

		authService.register(email, password).then(authData => {
			login(authData);
			history.push('/')
			
		});
	}

    return(
        <>
        <div className="wrapper"></div>
		<div className="grad"></div>
		<div className="header">
		
		</div>
		<br />
		<form className="login" method="POST" onSubmit={onRegisterHandler}>
			   <label htmlFor="email">Email</label>
			   <input type="text" placeholder="email" name="email" /> <br />
			   <label htmlFor="password">Password</label>
			   <input type="password" placeholder="*****" name="password" /> <br />
               <label htmlFor="re-password">Repeat Password</label>
			   <input type="password" placeholder="*****" name="re-password" /> <br />
			   <input type="submit" value="Register" />
		</form>
        </>

    )
}

export default Register;