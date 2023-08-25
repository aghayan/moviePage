import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Navigation } from '../component/navigation';
import { AddData } from '../store/movie/movie.action';
import './styles/registration.scss';

export  function RegistrationForm() {
  const dispatch = useDispatch();
  const { UserData } = useSelector( store => ({
      UserData: store.movieReducer.UserData
  }) )

  const navigate = useNavigate()
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const { register,
          handleSubmit,
          formState: { errors },
          watch,
          reset,      
  } = useForm();

  const onSubmit = (data) => {
      const updatedUserData = {...UserData, ...data};
      dispatch(AddData(updatedUserData));
      reset();
      console.log(updatedUserData)
  };

  useEffect(() => {
      const password = watch('password');
      const confirmPassword = watch('confirmPassword');
      setPasswordMatchError(password !== confirmPassword);
    }, [watch]);

return (
  <div>
    <Navigation/>
  <div className="signup-wrapper">
      <div className="registration-form">
      <h1>Sign Up</h1>
      <form  onSubmit={handleSubmit(onSubmit)}>
              <input className={errors.name ? "invalid" : "input"}
                  type='text'
                  placeholder="Name"
                  {...register("name", {
                      required: "Name is required",
                      pattern: {
                      value: /^(?! +$).*$/,
                      message: "Name must not be empty",
                      },
                  })}
              />
              <small>{errors.name && errors.name.message}</small>
              <input className={errors.surname ? "invalid" : "input"}
                  type='text'
                  placeholder="Surname"
                  {...register("surname", {
                      required: "Surname is required",
                      pattern: {
                      value: /^(?! +$).*$/,
                      message: "Surname must not be empty",
                      },
                  })}
              />
              <small>{errors.surname && errors.surname.message}</small>
    
              <input className={errors.email ? "invalid" : "input"}
                  type='text'
                  placeholder="Email"
                  {...register('email', {
                      required: 'Email is required',
                      pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: 'Invalid email format',
                      },
                  })}
              />
              <small>{errors.email && errors.email.message}</small>
              <input className={errors.password ? "invalid" : "input"}
                  type="password" 
                  placeholder='Password'
                  {...register("password",{ 
                      required: 'Password is required',
                      minLength: {
                          value: 5,
                          message: "Password must be 5-16 characters long"
                      },
                      maxLength: {
                          value: 16,
                          message: "Password must be 8-16 characters long"
                      },
                  }
                  )}
              />
              <small>{errors.password && errors.password.message}</small>
              <input
                  className={passwordMatchError ? 'invalid' : errors.confirmPassword ? 'invalid' : 'input'}
                  type="password"
                  placeholder="Confirm Password"
                  {...register('confirmPassword', {
                      required: 'Confirm Password is required',
                      validate: (value) =>
                      value === watch('password') || 'Passwords do not match',
                  })}
              />
              <small>{errors.confirmPassword && errors.confirmPassword.message}</small>
          <div className="links">
              <Link to={'/'} className="link">login account</Link>
          </div>
          <button className="submit">Register</button>
      </form>
  </div>
  </div>
  </div>
)
}
