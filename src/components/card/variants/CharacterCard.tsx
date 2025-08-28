import { Card, type CardProps } from "../Card";
import type { Character } from "../../../utils/types/film";
import styled from "@emotion/styled";
import { Paragraph } from "../../../utils/styles/typography";
import { popUpAnimation } from "../../../utils/styles/animation";
import { CharacterCardSkeletonLoader } from "../../loaders/variants/CharacterCardSkeletonLoader";
import { useMemo } from "react";
import { getCharacterImageBy } from "../../../utils/helpers/character";

interface CharacterCardProps extends CardProps {
  character: Character | undefined;
  isLoading: boolean;
  index: number;
}

const Container = styled.div({
  height: 64,
  width: "100%",
  overflow: "auto",
  padding: ".5rem",
});

const AnimationFrame = styled.div<{ index: number }>(({ index }) => ({
  opacity: 0,
  animation: `.5s ${popUpAnimation} ${index * 0.02}s linear forwards`,
}));

const Image = styled.img({
  width: 64,
  height: 64,
  borderRadius: "50%",
});

const Text = styled(Paragraph)({
  margin: "0 1rem",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

const TextContainer = styled.div({
  display: "flex",
  alignItems: "center",
});

export const CharacterCard = (props: CharacterCardProps) => {
  const url = getCharacterImageBy(props.character?.name);

  const loader = useMemo(() => <CharacterCardSkeletonLoader />, []);

  return (
    <Card {...props}>
      <Container>
        {props.isLoading ? (
          loader
        ) : (
          <AnimationFrame index={props.index}>
            <TextContainer>
              <Image
                src={url}
                alt={`Movie Star Cats Poster of ${props.character?.name}`}
              />

              <Text isBold>{props.character?.name}</Text>
            </TextContainer>
          </AnimationFrame>
        )}
      </Container>
    </Card>
  );
};
