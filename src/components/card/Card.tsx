import styled from "@emotion/styled";
import { theme } from "../../utils/styles/theme";

export interface CardProps {
  children?: React.ReactNode;
  hasPadding?: boolean;
  isClickable?: boolean;
}

export const CardContainer = styled.div<{
  hasPadding?: boolean;
  highlight: boolean;
}>(({ hasPadding = true, highlight }) => ({
  padding: hasPadding ? "1rem 1.5rem" : "0",
  borderRadius: theme.corners.large,
  backgroundColor: theme.palette.darkGray,
  width: "100%",
  boxSizing: "border-box",
  display: "flow-root",
  border: "1px solid transparent",
  transition: ".35s all",
  ":hover": {
    borderColor: highlight ? theme.palette.white : "transparent",
  },
}));

export const Card = ({
  children,
  hasPadding,
  isClickable = false,
}: CardProps) => {
  return (
    <CardContainer hasPadding={!hasPadding} highlight={isClickable}>
      {children}
    </CardContainer>
  );
};
