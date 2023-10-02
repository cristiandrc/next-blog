import ListPost from "./components/ListPost";
import { getAllPost } from "./utils/getAllPost";

export default async function Home() {
  const post = await getAllPost();

  return (
    <main className="max-w-screen-xl m-auto w-screen flex justify-center items-center flex-col ">
      <h1 className="text-5xl font-extrabold mt-32">Our blog</h1>
      <p className="text-2xl mt-5 mb-28">Checkout Something Cool</p>
      <ListPost post={post} />
    </main>
  );
}
