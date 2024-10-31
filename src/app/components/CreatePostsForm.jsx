import CreatePosts from "../createposts/page";
import { redirect } from "next/navigation";
import { db } from "@/utils/dbConnection";

export default async function CreatePostsForm({ clerk_id }) {
  async function handleSubmit(formValues) {
    "use server";
    const formData = {
      post: formValues.get("post"),
    };

    console.log(formData);
    await db.query(
      `INSERT INTO posts (clerk_id, post) 
              VALUES ($1, $2, $3);`,
      [clerk_id, formData.post]
    );

    redirect("/posts");
  }
  return (
    <form action={handleSubmit} className="flex flex-col items-center">
      <label htmlFor="bio"> </label>

      <div>
        <label
          htmlFor="post"
          className="block text-2xl font-medium text-gray-600 mb-2"
        >
          What is on your mind?
        </label>
        <input
          name="post"
          id="post"
          placeholder="Share your thoughts..."
          required
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-gray-800"
        ></input>
      </div>

      <button
        type="submit"
        className="mt-6 px-5 py-2 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100"
      >
        Create Post
      </button>
    </form>
  );
}
