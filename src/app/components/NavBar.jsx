//Add navigation here
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { SignedIn, UserButton } from "@clerk/nextjs";

export default async function NavBar() {
  const { userId } = await auth();
  return (
    <>
      <nav className="flex space-x-6">
        {/* <Link href="/" className="text-gray-600 hover:text-indigo-600">
          Sign-up
        </Link>

        <Link href="/" className="text-gray-600 hover:text-indigo-600">
          Sign-in
        </Link> */}

        <Link href="/" className="text-gray-600 hover:text-indigo-600">
          Home
        </Link>
        <Link href="/posts" className="text-gray-600 hover:text-indigo-600">
          Posts
        </Link>

        <Link
          href={`/user/${userId}`}
          className="text-gray-600 hover:text-indigo-600"
        >
          {" "}
          Profile
        </Link>
        {/* <Link
          href="/createProfile"
          className="text-gray-600 hover:text-indigo-600"
        >
          Create Profile
        </Link> */}
        {/* when the user is signed in, I will show the user button */}
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </>
  );
}
