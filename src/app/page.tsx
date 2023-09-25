import { getAllPost } from "./utils/getAllPost";
export default async function Home() {
  const post = await getAllPost();
  return (
    <main>
      <h1>Strapi Blog </h1>
      {post.map(({ id, title, description, cover }) => (
        <div key={id}>
          <img alt="cover" src={cover} />
          <span>{title}</span> <br />
          <small>{description}</small>
        </div>
      ))}
    </main>
  );
}
