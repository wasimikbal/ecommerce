// import "server-only";

import { createClient, type QueryParams } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { projectId, dataset, apiVersion, useCdn, } from "./env";

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: useCdn,
  token: 'skTtChPWO0dL5T9AtFzOowNlB98RjluCPjx0hhoOfSBKsXyiFVFW0qLzsI5ScfKigUPXfQAdY6JLIwIKCNtfjpdMTG5RIMmZ49TcZxGkxArCjhEZ7Vss1Gc5NAtafSLY5elhWvvWTUPALhHZp8pJ81109VOK4UY0QRtazMV4Lebbf8RnYPbS'
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: SanityImageSource)=> builder.image(source)

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}) {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate: process.env.NODE_ENV === 'development' ? 30 : 3600,
      tags,
    },
  });
}