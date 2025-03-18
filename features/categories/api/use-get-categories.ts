//Creating hooks for Categories it will interact will API call
import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/hono";

export const useGetCategories = () => {
  const query = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await client.api.categories.$get();

      if (!response.ok) {
        throw new Error("Failed to fetch while fetching categories");
      }

      const { data } = await response.json();
      return data;
    },
  });

  return query;
};
