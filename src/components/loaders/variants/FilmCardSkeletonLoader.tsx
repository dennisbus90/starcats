import styled from "@emotion/styled";
import { SkeletonLoader } from "../skeletonLoader";

const Loaders = styled.div({
  margin: "1rem",
});

const Loader = styled(SkeletonLoader)({
  marginBottom: "1rem",
  "&:not(:first-of-type)": {
    marginTop: "0.5rem",
    marginBottom: ".25rem",
  },
});

export const FilmCardSkeletonLoader = () => {
  return (
    <Loaders>
      <Loader height={184} />
      <Loader width={160} height={20} />
      <Loader width={80} />
    </Loaders>
  );
};
