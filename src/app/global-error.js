"use client";
import Link from "next/link";

export default function GlobalError({ error, reset }) {
  return (
    <>
      <html>
        <body>
          <h1> Oh Buzz. Something went wrong! </h1>
          <p>{error.message}</p>
          <button onClick={() => reset()}>Try again</button>
          <Link href="/">Go back to the homepage </Link>
        </body>
      </html>
    </>
  );
}
