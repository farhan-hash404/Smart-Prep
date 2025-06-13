import { useState } from "react";
import Footer from "../Pages/footer";

function Login() {
    const [mode, setMode] = useState("login"); // 'login' or 'register'
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate(formValues);
        setFormErrors(errors);
        setIsSubmit(true);
        if (Object.keys(errors).length === 0) {
            console.log(`${mode === "login" ? "Logging in" : "Registering"} with`, formValues);
        }
    };

    const validate = (values) => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (mode === "register" && !values.name) {
            errors.name = "Name is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!emailRegex.test(values.email)) {
            errors.email = "Invalid email format!";
        }

        if (!values.password) {
            errors.password = "Password is required!";
        } else if (values.password.length < 4) {
            errors.password = "Password must be at least 4 characters!";
        } else if (values.password.length > 12) {
            errors.password = "Password cannot exceed 12 characters!";
        }

        if (mode === "register") {
            if (!values.confirmPassword) {
                errors.confirmPassword = "Please confirm your password!";
            } else if (values.password !== values.confirmPassword) {
                errors.confirmPassword = "Passwords do not match!";
            }
        }

        return errors;
    };

    return (
        <div className="min-h-screen bg-green-200 flex items-center justify-center px-4">
          <div className="backdrop-blur-xl bg-gray-300 p-8 rounded-3xl shadow-2xl w-full max-w-md border border-white/30 transition-all duration-300">
            <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6 tracking-wide">
              {mode === "login" ? "Login " : "Create an account"}
            </h2>
      
            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === "register" && (
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your name"
                  />
                  <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                </div>
              )}
      
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Email"
                />
                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
              </div>
      
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Password"
                />
                <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>
              </div>
      
              {mode === "register" && (
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formValues.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Confirm Password"
                  />
                  <p className="text-red-500 text-sm mt-1">{formErrors.confirmPassword}</p>
                </div>
              )}
      
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600 text-white font-semibold py-2 rounded-xl shadow-md transition duration-300"
              >
                {mode === "Login" ? "Login" : "Register Your SmartPrep Account"}
              </button>
            </form>
      
            <div className="mt-6  text-sm text-gray-700">
              {mode === "login" ? (
                
                <>
                <hr/>
                <br/>
                  New To SmartPrep?{" "}
                  <br/>
                  
                 
                  <button
                    className="text-green-800 hover:underline font-small "
                    onClick={() => {
                      setMode("register");
                      setFormErrors({});
                      setIsSubmit(false);
                    }}
                  >
                   
                    Create Your SmartPrep Account
                  </button>
                </>
              ) : (
                <>
                  New to SmartPrep{" "}
                  <button
                    className="text-purple-600 hover:underline font-medium"
                    onClick={() => {
                      setMode("login");
                      setFormErrors({});
                      setIsSubmit(false);
                    }}
                  >
                    Login here
                  </button>
                  
                </>
              )}
            </div>
          </div>
        </div>
      );
      
}

export default Login;
