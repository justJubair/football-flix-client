import Lottie from "lottie-react";
import logo from "../../assets/images/logo.png"
import loginAnimation from "../../assets/animations/login.json";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
const Login = () => {
  const {login} = useAuth()
  const navigate = useNavigate()
  const handleLogin = e=>{
    e.preventDefault()
    const toastId = toast.loading("Logging in..")
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // login existing user
    login(email, password)
    .then(result=>{
      if(result.user){

        toast.success("User created", {id: toastId})
        navigate("/")
      }
    })
    .catch(error=>{
      toast.error(error.message, {id: toastId})
    })
    
}
  return (
    <div className="bg-base-200">
    
      <Link to="/"> <img className="p-4 relative md:absolute w-36" src={logo} alt={logo} /></Link>
    <div className="hero min-h-screen ">
     <div>
         <h1 className="text-4xl font-bold text-center md:text-5xl md:mt-6 lg:my-8">Login <span className="text-[#a16740]">now!</span></h1>
     <div className="hero-content lg:gap-10 items-center flex-col lg:flex-row">
        <div className="text-center lg:text-left">
         
          <div className="hidden w-48 lg:block">
            <Lottie animationData={loginAnimation} loop={true} />
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-[#a16740] text-black hover:bg-[#d5956a]">Login</button>
            </div>
          </form>
          <div className="flex items-center justify-between p-4">
            <p>New to Flix Football?</p>
            <Link to="/register" className="btn btn-link">Register Now</Link>
          </div>
        </div>
      </div>
     </div>
    </div>
    </div>
  );
};
export default Login;
