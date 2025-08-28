import { Card, type CardProps } from "../Card";
import type { Film } from "../../../utils/types/film";
import styled from "@emotion/styled";
import { Paragraph } from "../../../utils/styles/typography";
import { FilmCardSkeletonLoader } from "../../loaders/variants/FilmCardSkeletonLoader";
import { popUpAnimation } from "../../../utils/styles/animation";
import { theme } from "../../../utils/styles/theme";
import { Breakpoint } from "../../../utils/types/enums/breakpoint";

interface FilmCardProps extends CardProps {
  film: Film;
  isLoading: boolean;
  index: number;
}

const Container = styled.div({
  height: 300,
  overflow: "hidden",

  [`@media (min-width: ${Breakpoint.DESKTOP})`]: {
    height: 280,
  },
});

const AnimationFrame = styled.div<{ index: number }>(({ index }) => ({
  opacity: 0,
  animation: `.5s ${popUpAnimation} ${index * 0.05}s linear forwards`,
}));

const Poster = styled.img({
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: theme.corners.normal,
  borderTopLeftRadius: theme.corners.large,
  borderTopRightRadius: theme.corners.large,
});

const Text = styled(Paragraph)({
  marginLeft: "1rem",
  marginRight: "1rem",
  "&:first-of-type": {
    marginTop: "0.5rem",
    marginBottom: ".25rem",
  },
  "&:last-of-type": {
    marginTop: ".25rem",
    marginBottom: "1rem",
    color: "#c0c0c0",
    fontSize: ".85rem",
  },
});

export const FilmCard = (props: FilmCardProps) => {
  // TODO - To be replaced and removed
  const url = "https://m.media-amazon.com/images/I/81Bd9H3HP1L.jpg";

  return (
    <Card {...props}>
      <Container>
        {props.isLoading ? (
          <FilmCardSkeletonLoader />
        ) : (
          <AnimationFrame index={props.index}>
            <Poster
              src={url}
              alt={`${props.film.title} from the movie Star Cats`}
            />

            <Text isBold>{props.film.title}</Text>
            <Text>Episode {props.film.episode_id}</Text>
            {props.children && props.children}
          </AnimationFrame>
        )}
      </Container>
    </Card>
  );
};
