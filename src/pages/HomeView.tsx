import { useGetFilms } from "../hooks/useFilms";
import { useEffect, useState } from "react";
import type { Film } from "../utils/types/film";
import { FilmList } from "../components/lists/FilmList";
import { H2 } from "../utils/styles/typography";
import { FilterNavigation } from "../components/navigation/FilterNavigation";
import { Notification } from "../components/Notification/Notification";
import { NotificationType } from "../utils/types/enums/notificationType";
import { getErrorMessageOf } from "../utils/helpers/error";

const HomeView = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const { data, isLoading, isError, error, refetch } = useGetFilms();
  const errorMessage = isError ? getErrorMessageOf(error) : "";

  useEffect(() => {
    if (data) setFilms(data?.results ?? []);
  }, [data]);

  return (
    <>
      <H2>The World of Star Cats</H2>
      {isError && (
        <Notification
          message={errorMessage}
          type={NotificationType.DANGER}
          actionLabel="Retry"
          action={refetch}
        />
      )}
      <FilterNavigation title="Movies" />
      <FilmList films={films} isLoading={isLoading}></FilmList>
    </>
  );
};
export default HomeView;
