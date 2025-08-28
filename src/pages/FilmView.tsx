import { useGetFilms } from "../hooks/useFilms";
import { useEffect, useState } from "react";
import type { Character, Film } from "../utils/types/film";
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
import { FilmPresentationLoader } from "../components/loaders/variants/FilmPresentationLoader";

const FilmView = () => {
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);
  const { id } = useParams<{ id: string }>();
  const { data, isLoading: filmsIsLoading } = useGetFilms();
  const canFetchCharacters = !!selectedFilm?.characters?.length;
  const characterQueries = useGetCharacters(selectedFilm?.characters ?? []);
  const charactersIsLoading = canFetchCharacters
    ? characterQueries.some((q) => q.isLoading)
    : true;

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
      {filmsIsLoading ? <FilmPresentationLoader /> :
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
          {selectedFilm &&
            <Section>
              <Pill label={"Director"} value={selectedFilm?.director || ""} />
              <Pill label={"Released"} value={selectedFilm?.release_date || ""} />
            </Section>
          }
        </>
      }
      <Section margin={"2rem 0"}>
        {selectedFilm && <H3>Characters</H3>}
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
          isLoading={charactersIsLoading || filmsIsLoading}
        />
      </Section>
    </>
  );
};
export default FilmView;
