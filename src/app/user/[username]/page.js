//if you want to set up a profile page that renders data from clerk, you need:
//auth() --> userId
//currentUser --> username, email address, ...
//the data I render here comes from 2 places: some data comes from the currentuser (data collected by clerk), other data comes from the user table in supabase (bio, other user data...)
import NavBar from "@/app/components/NavBar";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { db } from "@/utils/dbConnection";

export default async function UserPage() {
  const user = await currentUser();
  console.log(user);
  //you can console.log user to see what it looks like inside

  const users = await db.query(`SELECT * FROM users WHERE clerk_id =$1;`, [
    user.id,
  ]);

  const wrangledUser = users.rows;

  return (
    <>
      <h1> User Page</h1>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <header className="w-full bg-white shadow-md py-4">
          <div className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-3xl font-bold text-indigo-600">Buzz</h1>
            <NavBar />
          </div>
        </header>

        <section className="w-full py-16 bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-center">
          <h2 className="text-4xl font-extrabold mb-4"> User Page </h2>
          {/* <p className="text-lg"> </p> */}
        </section>
        <h2 className=" text-gray-600 text-center font-extrabold mb-4 text-3xl">
          {" "}
          Welcome, {user?.username}
          {user?.lastName}{" "}
        </h2>
        <p className=" text-gray-600 text-center">
          {user?.emailAddresses[0].emailAddresses}
        </p>
        <div className="text-black overflow-scroll bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 h-[30vh] w-[80vw]">
          {wrangledUser.map((profile) => (
            <div key={profile.id}>
              <p>{profile.bio}</p>
            </div>
          ))}
        </div>
      </div>
      <footer className="w-full bg-gray-200 py-4 text-gray-600 text-center">
        <p>&copy; {new Date().getFullYear()} Buzz. All rights reserved.</p>
      </footer>
    </>
  );
}
