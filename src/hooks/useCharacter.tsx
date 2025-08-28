import { useQueries, useQuery } from "@tanstack/react-query";
import CharacterService from "../utils/services/characterService";
import { SubPath } from "../utils/api";

export const useGetCharacters = (urls: string[]) => {
  return useQueries({
    queries: urls.map((url) => ({
      queryKey: [SubPath.PEOPLE, url],
      queryFn: async () => CharacterService.getCharacterBy(url),
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      enabled: !!url,
    })),
  });
};

export const useGetCharacter = (url: string) => {
  return useQuery({
    queryKey: [SubPath.PEOPLE, url],
    queryFn: async () => CharacterService.getCharacterBy(url),
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
  });
};
