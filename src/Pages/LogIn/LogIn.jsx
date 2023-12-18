import { Link, useLocation, useNavigate } from 'react-router-dom';
import logImg from '../../assets/images/login/login.svg'; 
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';


const LogIn = () => {
  const {logInUser}=useContext(AuthContext)
  const location=useLocation()
  const navigate=useNavigate()
  console.log(location)
    const handleLogIn=(e)=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
      logInUser(email,password)
      
      .then((result)=>{
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const user = { email };
        //get access token
        axios.post(https://car-doctor-serversd.vercel.app/jwt', user, { withCredentials: true })
        .then(res=>{
          console.log(res.data)
          if (res.data.success) {
            navigate(location?.state ? location?.state : '/')
        }
        })
     //   
        console.log(user)
      })
      .catch((error)=>{
         const errorMessage = error.message;
         console.log(errorMessage)
      })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2">
            
        <img src={logImg} alt='logImg' className='mr-12'/>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogIn}>
            <h1 className="text-5xl font-bold">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"  name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
              
                <input type='submit' className='btn btn-accent' value={'submit'}/>
              </div>
            </form>
            <p className='my-4 text-center'>New to Car Doctor? <Link to="/register" className='text-orange-600 font-bold'>sign Up</Link></p>
          </div>
        </div>
      </div>
    );
};

export default LogIn;