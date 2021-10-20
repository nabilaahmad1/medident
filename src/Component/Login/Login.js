import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const Login = () => {
    const { signInWithGoogle, handleEmail, handlePassword, signInWithEmail } = useAuth();

    return (
        <div className="container-fluid my-5 py-5" id="login">
            {/* heading  */}
            <div className="heading mb-5">
                <h1 className="title lh-base fw-bolder">Login</h1>
            </div>
            <form className="container" onSubmit={signInWithEmail}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" onBlur={handleEmail} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" onBlur={handlePassword} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <label htmlFor="register">New to MediDent <Link to="/register">Create New Account</Link></label>
                    </div>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary rounded-pill mt-3 px-5 me-3">Sign in</button>
                    <button onClick={signInWithGoogle} type="submit" className="btn btn-primary rounded-pill mt-3 px-5 me-3">Sign in with <i className="fab fa-google text-white fs-6"></i></button>
                </div>
            </form>
        </div>
    );
};

export default Login;