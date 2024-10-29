// the sign up page needs the following elements:
//connection with the database
//auth() and userid
//a form to collect the users profile data
//sql query to insert the users data into the database
//we need to redirect the user to the homepage once they submit their profile form
//A suggestion; could have a try and catch for sql query

import { SignUp } from "@clerk/nextjs";
import NavBar from "@/app/components/NavBar";
import { redirect } from "next/navigation";

export default function SignupPage() {
  return (
    <>
      <h1> Sign-up page</h1>

      <SignUp />
      {/* <NavBar /> */}
    </>
  );
}
