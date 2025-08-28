import styled from "@emotion/styled";
import type { Film } from "../../utils/types/film";
import { Column, Columns } from "../../utils/styles/grid";
import { FilmCard } from "../card/variants/FilmCard";
import { GoTo } from "../../utils/styles/link";

interface FilmListProps {
  films: Film[];
  isLoading: boolean;
}

export const Container = styled.div({
  padding: "1rem 0",
});

export const FilmList = ({ films, isLoading }: FilmListProps) => {
  return (
    <Container>
      <Columns>
        {films.map((film, index) => (
          <Column key={film.episode_id} size={6} tablet={4} desktop={3}>
            <GoTo to={`/film/${film.episode_id}`}>
              <FilmCard
                film={film}
                isLoading={isLoading}
                index={index}
                hasPadding
                isClickable
              />
            </GoTo>
          </Column>
        ))}
      </Columns>
    </Container>
  );
};
