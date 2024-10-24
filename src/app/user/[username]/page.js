//if you want to set up a profile page that renders data from clerk, you need:
//auth() --> userId
//currentUser --> username, email address, ...
//the data I render here comes from 2 places: some data comes from the currentuser (data collected by clerk), other data comes from the user table in supabase (bio, other user data...)

export default function UserPage() {
  // const user = await currentUser();
  //you can console.log user to see what it looks like inside

  return (
    <>
      <h1> User Page</h1>
      {/* '?' can use optional chaining in case the user does not provide all the data we want to render    */}

      {/* <h2> Welcome, {user?.firstName}
        {user?.lastName} </h2>
      <p>{user?.emailAddresses[0].emailAddresses}</p>   */}
    </>
  );
}
