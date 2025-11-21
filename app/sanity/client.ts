import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "spu1xldo",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});