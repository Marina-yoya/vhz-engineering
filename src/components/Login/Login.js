import './Login.css'


const Login = () => {

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
			   <input type="button" value="Login" />
			
		</form>
        </>

    )
}

export default Login;