import { SubPath, baseUrl } from "../api";
import { handleHttpError } from "../http";
import type { FilmsResponse } from "../types/film";

const FilmService = {
  async getFilms(): Promise<FilmsResponse> {
    const res = await fetch(`${baseUrl}/${SubPath.FILMS}`);

    if (!res.ok) handleHttpError(res.status, res.statusText);
    return res.json();
  },
};
export default FilmService;
