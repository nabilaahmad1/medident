import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const Register = () => {
    const { signInWithGoogle, handleEmail, handlePassword, error, createUserWithEmail, handleName } = useAuth();

    return (
        <div className="container-fluid my-5 py-5">
            <div className="heading mb-5">
                <h1 className="title lh-base fw-bolder">Register</h1>
            </div>
            <div className="container">
                <form className="row g-3" onSubmit={createUserWithEmail}>
                    <div className="col-12">
                        <label htmlFor="inputName4" className="form-label">Name</label>
                        <input onBlur={handleName} type="text" className="form-control" id="inputName4" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input onBlur={handleEmail} type="email" className="form-control" id="inputEmail4" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword4" required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="login" className="form-label">Already an User <Link to="/login">Please Log in</Link></label>
                    </div>
                    <div className="col-12">
                        <label htmlFor="login" className="form-label text-danger">{error}</label>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary rounded-pill mt-3 px-5 me-3">Register</button>
                        <button onClick={signInWithGoogle} type="submit" className="btn btn-primary rounded-pill mt-3 px-5 me-3">Sign in with <i className="fab fa-google text-white fs-6"></i></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;