import { SubPath, baseUrl } from "../api";
import type { FilmsResponse } from "../types/Film";

const FilmService = {
  async getFilms(): Promise<FilmsResponse> {
    const res = await fetch(`${baseUrl}/${SubPath.FILMS}`);

    if (!res.ok) throw new Error("Failed to fetch films");
    return res.json();
  },
};
export default FilmService;
