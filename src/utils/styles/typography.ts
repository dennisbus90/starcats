import styled from "@emotion/styled";
import { theme } from "./theme";

const baseStyle = (isBold?: boolean) => ({
  color: theme.palette.white,
  fontWeight: isBold ? "bold" : "normal",
  padding: 0,
  margin: ".5rem 0",
});

export const H1 = styled.h1<{ isBold?: boolean }>(({ isBold }) => ({
  ...baseStyle(isBold),
  fontSize: "2.5rem",
  lineHeight: 1.2,
}));

export const H2 = styled.h2<{ isBold?: boolean }>(({ isBold }) => ({
  ...baseStyle(isBold),
  fontSize: "2rem",
  lineHeight: 1.3,
}));

export const H3 = styled.h3<{ isBold?: boolean }>(({ isBold }) => ({
  ...baseStyle(isBold),
  fontSize: "1.5rem",
  lineHeight: 1.4,
}));

export const H4 = styled.h4<{ isBold?: boolean }>(({ isBold }) => ({
  ...baseStyle(isBold),
  fontSize: "1.25rem",
  lineHeight: 1.4,
}));

export const Paragraph = styled.p<{ isBold?: boolean }>(({ isBold }) => ({
  ...baseStyle(isBold),
  fontSize: "1rem",
  lineHeight: 1.5,
}));
