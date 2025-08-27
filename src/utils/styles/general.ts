import styled from "@emotion/styled";
import { theme } from "./theme";
import { Breakpoint } from "../types/enums/breakpoint";

export const Container = styled.div({
  padding: "0 1rem",
  width: "100%",
  boxSizing: "border-box",
  [`@media (min-width: ${Breakpoint.DESKTOP})`]: {
    width: Breakpoint.DESKTOP,
    margin: "0 auto",
  },
});

export const Divider = styled.div({
  height: 1,
  width: "100%",
});

export const Section = styled.section<{ margin?: string }>(
  ({ margin = "0" }) => ({
    margin: margin,
  })
);

export const Button = styled.button({
  backgroundColor: "transparent",
  color: theme.palette.white,
  border: `1px solid ${theme.palette.white}`,
  borderRadius: 8,
  padding: "10px 20px",
  fontSize: "1rem",
  fontWeight: 500,
  cursor: "pointer",
  transition: "all 0.2s ease-out",

  ":hover": {
    backgroundColor: theme.palette.white,
    color: theme.palette.darkGray,
    borderColor: theme.palette.white,
  },

  "&:active": {
    transform: "scale(0.98)",
  },
});
