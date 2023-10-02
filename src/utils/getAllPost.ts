import { config } from "./config";
import { fetchData } from "./fetchDate";

export interface Post {
  id: number;
  title: string;
  description: string;
  slug: string;
  category: {
    data: {
      attributes: {
        slug: string;
      };
    };
  };
  cover: { data: { attributes: { url: string } } };
  blocks: { content: string }[];
}
export interface AllPostType {
  id: number;
  attributes: Post;
}
interface dataResponse {
  data: AllPostType[];
}

const urlParamsObject = {
  populate: ["cover", "category", "authorBio", "blocks"],
};

export const getAllPost = async () => {
  const { data } = await fetchData<dataResponse>("/articles", urlParamsObject);

  const post = data.map(
    ({
      id,
      attributes: { title, description, cover, blocks, slug, category },
    }) => {
      return {
        id,
        title,
        description,
        slug,
        categorySlug: category.data.attributes.slug,
        cover: `${config.urlStrapi}${cover.data.attributes.url}`,
        blocks,
      };
    }
  );

  return post;
};
