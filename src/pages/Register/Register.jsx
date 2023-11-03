import Lottie from "lottie-react";
import logo from "../../assets/images/logo.png"
import loginAnimation from "../../assets/animations/login.json";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import auth from "../../config/firebase.config";
import toast from "react-hot-toast";

const Register = () => {
  const {signUp} = useAuth()
    const handleRegister = e=>{
        e.preventDefault()
        const toastId = toast.loading("Creating user..")
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        signUp(email, password)
        .then(result=>{
          if(result.user){
            toast.success("User created", {id: toastId})
            updateProfile(auth.currentUser, {
              displayName: name, photoURL: photo
            })
            .then()
            .catch(error=>{
              toast.error(error.message , {id: toastId})
            })
          }
         
        })
        .catch(error=>{
          toast.error(error.message, {id: toastId})
        })
        
    }
    return(
        <div className="bg-base-200">
    
      <Link to="/"> <img className="p-4 relative md:absolute w-36" src={logo} alt={logo} /></Link>
    <div className="hero min-h-screen ">
     <div>
         <h1 className="text-4xl font-bold text-center md:text-5xl md:mt-6 lg:my-8">Register <span className="text-[#a16740]">now!</span></h1>
     <div className="hero-content lg:gap-10 items-center flex-col lg:flex-row">
        <div className="text-center lg:text-left">
         
          <div className="hidden w-48 lg:block">
            <Lottie animationData={loginAnimation} loop={true} />
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="https://img.png"
                className="input input-bordered"
                name="photo"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
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
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#a16740] text-black hover:bg-[#d5956a]">Login</button>
            </div>
          </form>
          <div className="flex items-center justify-between p-4">
            <p>Already have an account?</p>
            <Link to="/login" className="btn btn-link">Login Now</Link>
          </div>
        </div>
      </div>
     </div>
    </div>
    </div>
    )}
export default Register;