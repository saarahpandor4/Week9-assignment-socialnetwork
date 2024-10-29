import Link from "next/link";
import NavBar from "../components/NavBar";
import { redirect } from "next/navigation";
import { db } from "@/utils/dbConnection";

export default async function PostsPage() {
  const posts = await db.query(`SELECT * FROM posts`);

  console.log(posts);

  const wrangledPosts = posts.rows;

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
          <h2 className="text-4xl font-extrabold mb-4"> Posts </h2>
          <p className="text-lg">Share your posts here </p>

          <Link
            href="/createposts"
            className="mt-6 px-5 py-2 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100"
          >
            {" "}
            Create post
          </Link>
        </section>

        <main className="container mx-auto my-8 px-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-6"></h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-black overflow-scroll bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 h-[30vh] w-[80vw]">
              {wrangledPosts.map((post) => (
                <div
                  key={post.id}
                  className="flex flex-col space-y-2 p-4 mb-4 border-b border-gray-200 bg-gray-50 rounded-lg"
                >
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span className="font-semibold">{post.id}</span>
                    <span className="italic">
                      {new Date(post.posted_at).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-800 text-base font-medium">
                    {post.post}
                  </p>
                </div>
              ))}
            </div>

            {/* <div className="text-black overflow-scroll bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 h-[30vh] w-[80vw]">
              {wrangledPosts.map((post) => (
                <div
                  key={post.id}
                  className="flex flex-col space-y-2 p-4 mb-4 border-b border-gray-200 bg-gray-50 rounded-lg"
                >
                  
                  <p>{post.id}</p>
                  <p>{post.post}</p>
                  <p>{JSON.stringify(post.posted_at)}</p>
                </div>
              ))}
            </div> */}
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full bg-gray-200 py-4 text-gray-600 text-center">
          <p>&copy; {new Date().getFullYear()} Buzz. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
