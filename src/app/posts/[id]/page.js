//in Next.js 15, params is asynchronus
import { db } from "@/utils/dbConnection";
import Link from "next/link";

export default async function IdPage({ params }) {
  const myParams = await params;
  const posts = await db.query(`SELECT * FROM posts WHERE id =$1;`, [
    myParams.id,
  ]);
  console.log(myParams.id);

  const wrangledPost = posts.rows;
  console.log(wrangledPost);

  return (
    <>
      <h1> Post Number {myParams.id} </h1>

      {wrangledPost.map((post) => (
        <div key={post.id}>
          <p>{post.user_id}</p>
          <p>{post.clerk_id}</p>
          <p>{post.post}</p>
          <p>{JSON.stringify(post.posted_at)}</p>
        </div>
      ))}
    </>
  );
}
