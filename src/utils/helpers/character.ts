import darthVaderCat from "./../../assets/images/svg/characters/darthvader-cat.svg";
import r2d2 from "./../../assets/images/svg/characters/r2d2.svg";
import lukeSkywalker from "./../../assets/images/svg/characters/lukeskywalker.svg";
import noCat from "./../../assets/images/svg/characters/nocat.svg";

export const getCharacterImageBy = (name: string | undefined) => {
  switch (name) {
    case "Darth Vader":
      return darthVaderCat;
    case "Luke Skywalker":
      return lukeSkywalker;
    case "R2-D2":
      return r2d2;
    default:
      return noCat;
  }
};
