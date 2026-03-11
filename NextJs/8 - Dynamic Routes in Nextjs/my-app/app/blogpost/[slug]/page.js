export default async function Page({ params }) {
  // Destructure the slug after awaiting params
  const { slug } = await params;

  return (
    <main>
      <h1>My post: {slug}</h1>
    </main>
  );
}