import RichText from "./components/RichText";
import { getAllPost } from "./utils/getAllPost";

export default async function Home() {
  const post = await getAllPost();

  return (
    <main>
      <h1>Strapi Blog </h1>
      {post.map(({ id, title, description, cover, blocks }) => (
        <div key={id}>
          <img alt="cover" src={cover} />
          <span>{title}</span> <br />
          <small>{description}</small>
          <RichText content={blocks[0].content} />
        </div>
      ))}
    </main>
  );
}
