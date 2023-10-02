import Link from "next/link";
interface Post {
  id: number;
  title: string;
  description: string;
  slug: string;
  categorySlug: string;
  cover: string;
  blocks: {
    content: string;
  }[];
}

const ListPost = ({ post }: { post: Post[] }) => {
  return (
    <ul className="flex flex-wrap gap-4">
      {post.map(({ id, title, description, cover, slug, categorySlug }) => (
        <li className=" pl-7 pr-7 bg-slate-300 max-w-sm" key={id}>
          <Link
            className="flex flex-col justify-center items-center"
            href={`/${categorySlug}/${slug}`}
          >
            <img className="w-full" alt="cover" src={cover} />
            <span>{title}</span> <br />
            <small>{description}</small>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListPost;
