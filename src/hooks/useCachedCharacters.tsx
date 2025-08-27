import { useQueryClient } from "@tanstack/react-query";
import type { Character } from "../utils/types/Film";
import { SubPath } from "../utils/api";

export const useGetCachedCharacters = () => {
  const queryClient = useQueryClient();
  const allQueries = queryClient.getQueryCache().getAll();
  const characterQueries = allQueries.filter((query) => {
    const key = query.queryKey;
    return Array.isArray(key) && key[0] === SubPath.PEOPLE;
  });

  const characters = characterQueries
    .map((query) => query.state.data)
    .filter(Boolean) as Character[];

  return characters;
};
