const Token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
const urlStrapi = process.env.NEXT_PUBLIC_STRAPI_API_URL;

interface AllPostType {
  id: number;
  attributes: {
    title: string;
    description: string;
    cover: { data: { attributes: { url: string } } };
    blocks: [];
  };
}

export const getAllPost = async () => {
  const rts = await fetch("http://localhost:1337/api/articles?populate=*", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
    next: { revalidate: 20 },
  });
  const {
    data,
  }: {
    data: AllPostType[];
  } = await rts.json();

  const post = data.map(
    ({ id, attributes: { title, description, cover, blocks } }) => {
      return {
        id,
        title,
        description,
        cover: `${urlStrapi}${cover.data.attributes.url}`,
        blocks,
      };
    }
  );

  return post;
};
