//in Next.js 15, params is asynchronus

export default async function IdPage({ params }) {
  const myParams = await params;
  return (
    <>
      <h1> Post Number {myParams.id} </h1>
    </>
  );
}
