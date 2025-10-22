import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const UpdateProfile = () => {
  const { user, updateUser } = useContext(AuthContext); 
  
  

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    if (!user) return toast.error("No user logged in!");

    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        toast.success("Profile updated successfully!");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <form
      onSubmit={handleUpdate}
      className="hero bg-base-200 flex justify-center items-center min-h-screen"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-6">
          <h2 className="text-center text-2xl font-semibold">
            Update Your Profile
          </h2>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Type Your Name"
                required
                defaultValue={user?.displayName || ""}
              />
              <label className="label">Image Url</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Paste Your Image Link"
                required
                defaultValue={user?.photoURL || ""}
              />
              <button
                type="submit"
                className="btn btn-neutral mt-4"
              >
                Update Profile
              </button>
            </fieldset>
          </div>
        </div>
      </div>
      <ToastContainer />
    </form>
  );
};

export default UpdateProfile;
