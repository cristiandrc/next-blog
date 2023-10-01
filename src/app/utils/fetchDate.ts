import { config } from "./config";

export const fetchData = async <T>(path: string): Promise<T> => {
  try {
    const url = `${config.urlStrapi}/api${path}?populate=*`;
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
