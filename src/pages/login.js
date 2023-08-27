import { useForm } from 'react-hook-form';
import { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import './styles/login.scss'
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {

    const dispatch = useDispatch();
    const { UserData } = useSelector( store => ({
        UserData: store.movieReducer.UserData
    }) )

    const { register, handleSubmit, formState: { errors }, reset} = useForm();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate()

    const onSubmit = (data) => {

        const inputData = {...UserData}

        if (login === 'admin' && password === 'admin') {
            setLogin('');
            setPassword('');
            navigate('/homeFilms');
            reset();
        }else if (data.login ===  inputData.email && data.password === inputData.password){
          
            navigate('/homeFilms');
            reset();
        } else {
            setError('Invalid login or password'); 
        }
      };

  return (
    
    <>
        <div className="login-container">
      <div className="login-box">
        <h1>Welcome to Your Movie Website</h1>
        <form className='loginForm' onSubmit={handleSubmit(onSubmit)}>

        <input  {...register("login", { required: "Login is required" })} 
                    type="text" 
                    placeholder='Email'
                    value={login}
                    onChange={(e) => {
                        setLogin(e.target.value);
                        }}

                />
                <input  {...register("password", { required: "Password is required" })} 
                    type="password" 
                    placeholder='Password'
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        }}
                />
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <Link to={'/signin'}>Register</Link>
          </div>
          <div className='errors'>
            {errors.login && <p className={(errors.login || (login !== 'arman2002' && login !== '')) ? "error" : ""}>{errors.login.message}</p>}
            {errors.password && <p>{errors.password.message}</p>}
        </div>
        <>
            {error && <p className="error">{error}</p>}
            <button>Sign up</button>
        </>
        </form>
       
      </div>
      </div>
    </>
  );
};

export default Login;
