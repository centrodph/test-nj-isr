import { getHeaders } from "./getHeaders";

/**
 * Using the ContentStack Rest API, get a single entry by the field url
 */
export const getEntry = async (contentType: string, url: string) => {
  const data = await fetch(
    `${process.env.CONTENT_STACK_BASE_URL}v3/content_types/${contentType}/entries?environment=${process.env.CONTENT_STACK_ENVIRONMENT}&query={"url.url": "${url}"}`,
    {
      method: "GET",
      headers: getHeaders(),
      redirect: "follow",
    }
  ).then((res) => res.json());
  return data.entries[0];
};
