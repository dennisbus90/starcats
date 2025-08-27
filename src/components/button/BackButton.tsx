import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import backArrowIcon from "./../../assets/images/svg/back-arrow-icon.svg";

const Icon = styled.img({
  width: 40,
  height: 40,
});

const GoButton = styled.button({
  background: "transparent",
  border: "none",
  cursor: "pointer",
  transition: ".3s all",
  ":hover": {
    transform: "scale(1.2)",
  },
});

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <GoButton onClick={() => navigate(-1)}>
      <Icon src={backArrowIcon} />
    </GoButton>
  );
};
