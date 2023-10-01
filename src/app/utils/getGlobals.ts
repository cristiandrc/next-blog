import { config } from "./config";
import { fetchData } from "./fetchDate";
import qs from "qs";

interface GlobalType {
  data: {
    attributes: {
      navbar: {
        navbarLogo: {
          LogoImg: {
            data: {
              id: number;
              attributes: {
                url: string;
              };
            };
          };
        };
        links: Array<{
          id: number;
          text: string;
          url: string;
          newTab: boolean;
        }>;
      };
      metadata: {
        id: number;
        metaTitle: string;
        metaDescription: string;
      };
      favicon: {
        data: {
          id: number;
          attributes: {
            url: string;
          };
        };
      };
    };
  };
}

const urlParamsObject = {
  populate: [
    "metadata.shareImage",
    "favicon",
    "navbar.links",
    "navbar.navbarLogo.LogoImg",
    "footer.footerLogo.logoImg",
    "footer.menuLinks",
    "footer.legalLinks",
    "footer.socialLinks",
    "footer.categories",
  ],
};

export const getGlobal = async () => {
  if (!config.Token)
    throw new Error("The Strapi token environment variable is no set");

  const {
    data: { attributes },
  } = await fetchData<GlobalType>("/global", urlParamsObject);
  console.log({ attributes });

  return {
    title: attributes.metadata.metaTitle,
    description: attributes.metadata.metaDescription,
    icon: `${config.urlStrapi}${attributes.favicon.data.attributes.url}`,
    logo: `${config.urlStrapi}${attributes.navbar.navbarLogo.LogoImg.data.attributes.url}`,
    links: attributes.navbar.links,
  };
};
