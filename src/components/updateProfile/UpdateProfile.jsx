// UpdateProfile.jsx
import React, { useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const { user, updateUser, setUser } = useContext(AuthContext);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [message, setMessage] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateUser({ displayName: name, photoURL });
      setUser({ ...user, displayName: name, photoURL }); // local update
      toast("✅ Profile updated successfully!");
      setShowForm(false);
    } catch (error) {
      setMessage("❌ " + error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Profile Info</h2>

    
      <div className="flex flex-col items-center">
        <img
          src={user?.photoURL || "https://via.placeholder.com/100"}
          alt="Profile"
          className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-purple-500"
        />
        <h4 className="text-lg font-semibold text-gray-700">{user?.displayName || "No name set"}</h4>
        <p className="text-gray-500">{user?.email}</p>
      </div>

    
      <button
        className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition-colors duration-300"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Cancel" : "Update Profile"}
      </button>

     
      {showForm && (
        <form
          onSubmit={handleUpdate}
          className="mt-6 flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Enter new name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            placeholder="Enter image URL"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition-colors duration-300"
          >
            Save Changes
          </button>
        </form>
      )}

      
      {message && (
        <p
          className={`mt-4 text-center font-medium ${
            message.includes("✅") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default UpdateProfile;
