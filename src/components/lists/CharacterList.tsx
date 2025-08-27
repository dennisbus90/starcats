import styled from "@emotion/styled";
import type { Character } from "../../utils/types/Film";
import { Column, Columns } from "../../utils/styles/grid";
import { CharacterCard } from "../card/variants/CharacterCard";
import { Notification } from "../Notification/Notification";
import { SubPath } from "../../utils/api";
import { GoTo } from "../../utils/styles/link";

interface CharacterListProps {
  characters: Character[];
  isLoading?: boolean;
}

export const Container = styled.div({
  padding: "1rem 0",
});

export const CharacterList = ({
  characters,
  isLoading = false,
}: CharacterListProps) => {
  return (
    <Container>
      {!isLoading && !characters.length && (
        <Notification message="You haven’t selected any movies yet"></Notification>
      )}
      <Columns>
        {characters.map((character, index) => {
          const urlPaths = character?.url.split("/") || "";
          const characterId = urlPaths[urlPaths.indexOf(SubPath.PEOPLE) + 1];

          return (
            <Column key={index} size={6} tablet={4} desktop={3}>
              <GoTo to={`character/${characterId}`}>
                <CharacterCard
                  character={character}
                  index={index}
                  isLoading={isLoading}
                  hasPadding
                  isClickable
                />
              </GoTo>
            </Column>
          );
        })}
      </Columns>
    </Container>
  );
};
