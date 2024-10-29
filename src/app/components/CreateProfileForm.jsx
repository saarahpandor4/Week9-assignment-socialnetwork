import CreateProfilePage from "../createProfile/page";
import { db } from "@/utils/dbConnection";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function CreateProfileForm({}) {
  async function handleSubmit(formValues) {
    "use server";
    const formData = {
      bio: formValues.get("bio"),
    };

    const user = await currentUser();
    console.log(user);

    console.log(formData);
    await db.query(`UPDATE users SET bio = $1 WHERE clerk_id =$2;`, [
      formData.bio,
      user.id,
    ]);

    redirect("/");
  }
  return (
    <form action={handleSubmit} className="flex flex-col items-center">
      <label htmlFor="bio"> </label>

      {/* <div>
        <label
          htmlFor="username"
          className="block text-2xl font-medium text-gray-600 mb-2 "
        >
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter a username"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-gray-800"
        />
      </div> */}

      <div>
        <label
          htmlFor="bio"
          className="block text-2xl font-medium text-gray-600 mb-2"
        >
          Bio
        </label>
        <input
          name="bio"
          id="bio"
          placeholder="Tell us about yourself..."
          required
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-gray-800"
        ></input>
      </div>
      <button
        type="submit"
        className="mt-6 px-5 py-2 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100"
      >
        {" "}
        Create Profile
      </button>
    </form>
  );
}
