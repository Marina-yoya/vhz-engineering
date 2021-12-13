
import './Register.css';



const Register = () => {

    return(
        <>
        <div className="wrapper"></div>
		<div className="grad"></div>
		<div className="header">
		
		</div>
		<br />
		<form className="login">
			   <label htmlFor="email">Email</label>
			   <input type="text" placeholder="email" name="email" /> <br />
			   <label htmlFor="password">Password</label>
			   <input type="password" placeholder="*****" name="password" /> <br />
               <label htmlFor="re-password">Repeat Password</label>
			   <input type="password" placeholder="*****" name="re-password" /> <br />
			   <input type="button" value="Register" />
		</form>
        </>

    )
}

export default Register;