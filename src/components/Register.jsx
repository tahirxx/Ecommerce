import  { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState(''); 
    const [name, setName] = useState('');  
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        try {
            const res = await axios.post('http://localhost:8000/register', 
                { name, email, password });
           
                if(res.data === "exist"){
                alert("User already exists");
            }
            else if(res.data === "notexist"){
                navigate('/');
                alert("Successfully registered")
            }
          
          } catch(e) {
            alert('An error occurred')
            console.log(e)
       
          }
    }
    
  return (
    
       <>
        
        <div className="flex min-h-full flex-1 flex-col justify-center  px-6 py-40 lg:px-8">
          <div className="flex justify-center flex-col items-center sm:mx-auto sm:w-full sm:max-w-sm">
            
  
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Register 
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" onSubmit={handleSubmit} method="POST" >
            <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Full name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    value={name}
                    type="name"
                    placeholder='Full name'
                    autoComplete="name"
                    required
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="F" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    value={email}
                    type="email"
                    
                    placeholder='email'
                    autoComplete="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    value={password}
                    type="password"
                    autoComplete="current-password"
                    required
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
              
            </form>
          <br />

          <Link to="/login" >Login Page</Link>
          </div>
        </div>
      </>
   
  )
  
}

