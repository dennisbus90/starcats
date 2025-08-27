import styled from "@emotion/styled";
import { SkeletonLoader } from "../skeletonLoader";
import { getRandomNumber } from "../../../utils/calculations/number";

const Loaders = styled.div({
  display: "flex",
  margin: ".5rem",
  alignItems: "center",
});

const CircleLoader = styled(SkeletonLoader)({
  borderRadius: "50%",
  marginRight: ".5rem",
});

const Loader = styled(SkeletonLoader)({
  "&:first-of-type": {
    marginBottom: ".5rem",
  },
});

export const CharacterCardSkeletonLoader = () => {
  const number = getRandomNumber();

  return (
    <Loaders>
      <CircleLoader height={48} width={48} />
      <div>
        <Loader width={160} />
        <Loader width={number} />
      </div>
    </Loaders>
  );
};
