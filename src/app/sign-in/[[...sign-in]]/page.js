//You can use the Sign in component from clerk and customise however
import { SignIn } from "@clerk/nextjs";
import NavBar from "@/app/components/NavBar";

export default function SignInPage() {
  return (
    <>
      <h1>Sign-in Page</h1>
      {/* <NavBar /> */}
      <SignIn />
    </>
  );
}
