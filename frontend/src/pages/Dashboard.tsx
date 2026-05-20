import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="text-gray-600">Welcome, {user?.email}</p>
      <button
        onClick={handleLogout}
        className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-200"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
