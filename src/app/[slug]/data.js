import { unstable_cache } from "next/cache";

export const getData = unstable_cache(async () => {
  await new Promise(resolve => setTimeout(resolve, 5000));

  return {
    title: "Hello World"
  }
});

export const getPages = unstable_cache(async () => {
  return ['a', 'b', 'c'];
});
