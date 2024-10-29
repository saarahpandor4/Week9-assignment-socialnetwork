import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function Header() {
  //userId save to db
  const { userId } = await auth();

  return (
    <>
      {/* when the user is signed in, I will show the user button */}

      {/* we only want to show the SignInButton and SignupButton when the user is signed out */}
      <SignedOut>
        <SignInButton mode="modal"> Sign In </SignInButton>
        <SignUpButton> Sign Up </SignUpButton>
      </SignedOut>
      {userId}
    </>
  );
}
