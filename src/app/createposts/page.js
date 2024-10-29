import CreatePostsForm from "../components/CreatePostsForm";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConnection";
import NavBar from "../components/NavBar";

export default async function CreatePosts() {
  const user = await currentUser();
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <header className="w-full bg-white shadow-md py-4">
          <div className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-3xl font-bold text-indigo-600">Buzz</h1>
            <NavBar />
          </div>
        </header>

        <section className="w-full py-16 bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-center">
          <h2 className="text-4xl font-extrabold mb-4"> Create your Post </h2>
          <CreatePostsForm clerk_id={user.id} />
        </section>
      </div>
      <footer className="w-full bg-gray-200 py-4 text-gray-600 text-center">
        <p>&copy; {new Date().getFullYear()} Buzz. All rights reserved.</p>
      </footer>
    </>
  );
}
