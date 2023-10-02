import { config } from "./config";
import qs from "qs";

export const fetchData = async <T>(
  path: string,
  urlParamsObject = {}
): Promise<T> => {
  try {
    if (!config.Token)
      throw new Error("The Strapi token environment variable is no set");

    const queryString = qs.stringify(urlParamsObject);
    const url = `${config.urlStrapi}/api${path}${
      queryString ? `?${queryString}` : ""
    }`;
    const headersOptions = {
      next: { revalidate: config.revalidateTime },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.Token}`,
      },
    };
    const rts = await fetch(url, headersOptions);
    const data: T = await rts.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(
      "Please check if your server is running and you set all the required tokens."
    );
  }
};
