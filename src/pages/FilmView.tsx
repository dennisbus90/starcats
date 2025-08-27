import { useGetFilms } from "../hooks/useFilms";
import { useEffect, useState } from "react";
import type { Character, Film } from "../utils/types/Film";
import { H2, H3, Paragraph } from "../utils/styles/typography";
import { useParams } from "react-router-dom";
import { useGetCharacters } from "../hooks/useCharacter";
import { CharacterList } from "../components/lists/CharacterList";
import { Notification } from "../components/Notification/Notification";
import { NotificationType } from "../utils/types/enums/notificationType";
import { getErrorMessageOf } from "../utils/helpers/error";
import { Section } from "../utils/styles/general";
import { Column, Columns } from "../utils/styles/grid";
import { Pill } from "../components/pill/Pill";
import { BackButton } from "../components/button/BackButton";

const FilmView = () => {
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);
  const { id } = useParams<{ id: string }>();
  const { data } = useGetFilms();
  const characterQueries = useGetCharacters(selectedFilm?.characters ?? []);
  const charactersIsLoading = characterQueries.some((q) => q.isLoading);
  const characters = (characterQueries ?? []).map(
    (query) => query.data as Character
  );
  const characterErrors = characterQueries
    .filter((q) => q.isError)
    .map((q) => getErrorMessageOf(q.error));
  const hasCharacterError = characterErrors.length > 0;

  useEffect(() => {
    const films = data?.results ?? [];
    if (films.length) {
      const film = films.find((film) => film.episode_id === Number(id));
      film && setSelectedFilm(film);
    }
  }, [data]);

  const refetchErrorCharacters = () => {
    characterQueries.forEach((q) => {
      if (q.isError) q.refetch();
    });
  };

  return (
    <>
      <Section margin={"1rem 0"}>
        <Columns>
          <Column desktop={7} tablet={8} mobile={12}>
            <BackButton />
            <H2 isBold>{selectedFilm?.title}</H2>
            <Paragraph>{selectedFilm?.opening_crawl}</Paragraph>
          </Column>
        </Columns>
      </Section>
      <Section>
        <Pill label={"Director"} value={selectedFilm?.director || ""} />
        <Pill label={"Released"} value={selectedFilm?.release_date || ""} />
      </Section>
      <Section margin={"2rem 0"}>
        <H3>Characters</H3>
        {hasCharacterError && (
          <Notification
            message={characterErrors.join(", ")}
            type={NotificationType.DANGER}
            actionLabel="Retry"
            action={refetchErrorCharacters}
          />
        )}
        <CharacterList
          characters={characters}
          isLoading={charactersIsLoading}
        />
      </Section>
    </>
  );
};
export default FilmView;
