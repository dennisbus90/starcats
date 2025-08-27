import { useQuery } from "@tanstack/react-query";
import FilmService from "../utils/services/filmService";
import { SubPath } from "../utils/api";

export const useGetFilms = () => {
  return useQuery({
    queryKey: [SubPath.FILMS],
    queryFn: FilmService.getFilms,
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
  });
};
