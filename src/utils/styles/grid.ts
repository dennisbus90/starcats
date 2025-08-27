import styled from "@emotion/styled";
import { Breakpoint } from "../types/enums/breakpoint";

export const Columns = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
  gap: 16,
});

export const Column = styled.div<{
  size?: number;
  mobile?: number;
  tablet?: number;
  desktop?: number;
}>(({ size = 12, mobile, tablet, desktop }) => ({
  gridColumn: `span ${size}`,

  ...(mobile && {
    [`@media (min-width: ${Breakpoint.MOBILE})`]: {
      gridColumn: `span ${mobile}`,
    },
  }),
  ...(tablet && {
    [`@media (min-width: ${Breakpoint.TABLET})`]: {
      gridColumn: `span ${tablet}`,
    },
  }),
  ...(desktop && {
    [`@media (min-width: ${Breakpoint.DESKTOP})`]: {
      gridColumn: `span ${desktop}`,
    },
  }),
}));
