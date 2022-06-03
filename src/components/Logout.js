import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../components/features/loginSlice";
import { useDispatch } from "react-redux";

const Logout = () => {

  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Logout from your Account
      </h2>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Logout
          </button>
        </div>
      </form>
    </div>
  )
}

export default Logout