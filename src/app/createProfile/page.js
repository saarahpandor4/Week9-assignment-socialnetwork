//here you can use your clerk sign up component
//you can then redirect them
// import { SignUp } from "@clerk/nextjs";
import { db } from "@/utils/dbConnection";
import { useAuth } from "@clerk/nextjs";
import CreateProfileForm from "../components/CreateProfileForm";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function CreateProfilePage() {
  const user = await currentUser();
  return (
    <>
      {/* <h1>Create Profile</h1>
      <CreateProfileForm clerk_id={user.id} /> */}
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        {/* Header */}
        <header className="w-full bg-white shadow-md py-4">
          <div className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-3xl font-bold text-indigo-600">Buzz</h1>
          </div>
        </header>

        <div className="w-full py-16 bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-center">
          <h2 className="text-4xl font-extrabold mb-4"> Create Profile </h2>
          <CreateProfileForm clerk_id={user.id} className="text-lg" />
        </div>
      </div>
      redirect(`/posts``);
    </>
  );
}
