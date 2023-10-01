import { config } from "./config";
import { fetchData } from "./fetchDate";

interface AllPostType {
  id: number;
  attributes: {
    title: string;
    description: string;
    cover: { data: { attributes: { url: string } } };
    blocks: { content: string }[];
  };
}
interface dataResponse {
  data: AllPostType[];
}

export const getAllPost = async () => {
  const { data } = await fetchData<dataResponse>("/articles");

  const post = data.map(
    ({ id, attributes: { title, description, cover, blocks } }) => {
      return {
        id,
        title,
        description,
        cover: `${config.urlStrapi}${cover.data.attributes.url}`,
        blocks,
      };
    }
  );

  return post;
};
