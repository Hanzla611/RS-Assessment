import React, { useState, useRef } from "react";
import loginImg from "../assets/login-screen.png";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { checkValidData } from "../utils/validate";
const backgroundImageStyle = {
  backgroundImage: `url(${loginImg})`,
};

function Login() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const email = useRef();
  const password = useRef();
  const name = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    let data = {};

    if (isLogin) {
      // When logging in, retrieve user data from localStorage
      const storedData = localStorage.getItem("user");

      if (storedData) {
        data = JSON.parse(storedData);

        // Check if the provided email and password match any user in localStorage
        const user = data.find(
          (user) =>
            user.email === email.current.value &&
            user.password === password.current.value
        );

        if (user) {
          // User exists, navigate to the "browse" page
          navigate("/browse");
        } else {
          // User does not exist, show an alert and navigate to the login page
          alert("User does not exist");
          navigate("/");
        }
      }
    } else {
      // When registering, add the user data to localStorage
      data = [
        {
          name: name.current.value,
          email: email.current.value,
          password: password.current.value,
        },
      ];

      // Check if the email already exists in localStorage before adding
      const storedData = localStorage.getItem("user");

      if (storedData) {
        const existingData = JSON.parse(storedData);
        const existingUser = existingData.find(
          (user) => user.email === email.current.value
        );

        if (existingUser) {
          // User with the same email already exists, show an alert
          alert("User with this email already exists");
          return;
        }

        // Add the new user data to the existing data
        existingData.push(data[0]);
        localStorage.setItem("user", JSON.stringify(existingData));
      } else {
        localStorage.setItem("user", JSON.stringify(data));
      }

      // Clear input fields
      name.current.value = "";
      email.current.value = "";
      password.current.value = "";
      navigate("/browse");
    }
  };

  return (
    <div>
      <section className="min-h-screen flex items-stretch text-white ">
        <div
          className="lg:flex w-1/2 hidden bg-white bg-no-repeat bg-cover relative items-center"
          style={backgroundImageStyle}
        >
          <div className="absolut opacity-60 inset-0 z-0"></div>
        </div>
        <div
          className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
        >
          <div className="w-full py-6 z-20">
            <img className="m-auto pb-2" src={Logo} alt="brand logo" />
            <span className="text-xl font-bold" style={{ color: "#11092F" }}>
              Welcome
            </span>
            <p className="text-gray-500 text-sm">
              Login to Labs Monitoring System{" "}
            </p>
            <form
              onSubmit={handleSubmit}
              className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
            >
              <div className="pb-2 pt-4">
                {!isLogin && (
                  <input
                    ref={name}
                    type="text"
                    name="Username"
                    id="name"
                    placeholder="Username"
                    className="block mb-6 outline-none border-2 w-full p-3 text-md text-black rounded"
                  />
                )}
                <input
                  ref={email}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="block outline-none border-2 w-full p-3 text-md text-black rounded"
                />
              </div>
              <div className="pb-2 pt-4">
                <input
                  ref={password}
                  className="block outline-none border-2 w-full p-3 text-md rounded text-black"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="text-left">
                <p className="text-red-600 mb-4 text-xs">{errorMessage}</p>
              </div>
              <div className="px-0 pb-2 pt-4">
                <button
                  style={{ background: "#11092F" }}
                  onClick={handleSubmit}
                  className="uppercase block w-full p-2 text-lg rounded  hover:bg-violet-600 focus:outline-none"
                >
                  {isLogin ? "Login" : "Register"}
                </button>
              </div>
              <div className="text-right text-gray-400 hover:underline hover:text-gray-700">
                <a href="#">Forgot your password?</a>
              </div>
              {!isLogin ? (
                <div className="p-4 text-center right-0 left-0 flex justify-center space-x-4 mt-4 ">
                  <span className="text-gray-600 text-sm p-0 flex">
                    Already a memeber?{" "}
                    <p
                      onClick={() => setIsLogin(!isLogin)}
                      className="ml-1 cursor-pointer hover:underline hover:text-blue-600"
                    >
                      Sign in here
                    </p>
                  </span>
                </div>
              ) : (
                <div className="p-4 text-center right-0 left-0 flex justify-center space-x-4 mt-4 ">
                  <span className="text-gray-600 text-sm flex">
                    Not Registered Yet?{" "}
                    <p
                      onClick={() => setIsLogin(!isLogin)}
                      className="ml-1 cursor-pointer hover:underline hover:text-blue-600"
                    >
                      Register here
                    </p>
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
