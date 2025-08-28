import { handleHttpError } from "../http";
import type { Character } from "../types/film";

const CharacterService = {
  async getCharacterBy(url: string): Promise<Character> {
    const res = await fetch(url);

    if (!res.ok) handleHttpError(res.status, res.statusText);
    return res.json();
  },
};
export default CharacterService;
