import type { Character } from "../types/Film";

const CharacterService = {
  async getCharacterBy(url: string): Promise<Character> {
    const res = await fetch(url);

    if (!res.ok) throw new Error("Failed to fetch character");
    return res.json();
  },
};
export default CharacterService;
