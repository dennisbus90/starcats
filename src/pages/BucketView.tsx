import { H2 } from "../utils/styles/typography";
import { CharacterList } from "../components/lists/CharacterList";
import { BackButton } from "../components/button/BackButton";
import { useGetCachedCharacters } from "../hooks/useCachedCharacters";

const BucketView = () => {
  const characters = useGetCachedCharacters();

  return (
    <>
      <BackButton />
      <H2>Characters</H2>
      <CharacterList characters={characters} />
    </>
  );
};
export default BucketView;
