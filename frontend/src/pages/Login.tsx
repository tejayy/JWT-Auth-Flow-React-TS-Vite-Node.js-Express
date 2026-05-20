import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = localStorage.getItem("authUser");
    const parsedUser = JSON.parse(storedUser);

    if (parsedUser.email === email && parsedUser.password === password) {
      localStorage.setItem("user", JSON.stringify({ email }));
      alert("Login success");
    } else {
      alert("wrong creds");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center  mb-6">Login</h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition duration-200"
          >
            Login
          </button>

          <p className="text-sm text-center text-gray-500 mt-2">
            Don&apos;t have an account?{" "}
            <span className="text-black font-medium cursor-pointer">
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
