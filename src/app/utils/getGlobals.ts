import { config } from "./config";
import { fetchData } from "./fetchDate";

interface MetadataType {
  data: {
    attributes: {
      metadata: {
        id: number;
        metaTitle: string;
        metaDescription: string;
      };
    };
  };
}

export const getGlobal = async () => {
  if (!config.Token)
    throw new Error("The Strapi token environment variable is no set");

  const {
    data: { attributes },
  } = await fetchData<MetadataType>("/global");
  console.log({ attributes });

  return {
    title: attributes.metadata.metaTitle ?? "Meta data",
    description: attributes.metadata.metaDescription ?? "Meta description",
  };
};
