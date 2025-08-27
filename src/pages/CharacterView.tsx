import { H2 } from "../utils/styles/typography";
import { useParams } from "react-router-dom";
import { useGetCharacter } from "../hooks/useCharacter";
import { SubPath, baseUrl } from "../utils/api";
import { Section } from "../utils/styles/general";
import { BackButton } from "../components/button/BackButton";
import { getCharacterImageBy } from "../utils/helpers/character";
import styled from "@emotion/styled";
import { Column, Columns } from "../utils/styles/grid";

const ProfileImage = styled.img({
  width: 248,
  height: 248,
  display: "block",
});

const CharacterView = () => {
  const { id } = useParams<{ id: string }>();
  const url = `${baseUrl}/${SubPath.PEOPLE}/${id}/`;
  const { data: character } = useGetCharacter(url);
  const characterImage = getCharacterImageBy(character?.name);

  return (
    <>
      <BackButton />
      <Columns>
        <Column desktop={3}>
          <ProfileImage src={characterImage} alt={character?.name} />
        </Column>

        <Column desktop={6}>
          <Section margin="0 0 0 2rem">
            <H2>{character?.name}</H2>
            <ul>
              <li>gender: {character?.gender}</li>
              <li>height: {character?.height}</li>
              <li>Eye color: {character?.eye_color}</li>
              <li>Hair color: {character?.hair_color}</li>
            </ul>
          </Section>
        </Column>
      </Columns>
    </>
  );
};
export default CharacterView;
