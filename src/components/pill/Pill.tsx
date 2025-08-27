import styled from "@emotion/styled";
import { theme } from "../../utils/styles/theme";
import { Paragraph } from "../../utils/styles/typography";

interface PillProps {
  label: string;
  value: string;
}

const PillContainer = styled.div({
  display: "inline-flex",
  alignItems: "center",
  borderRadius: theme.corners.large,
  overflow: "hidden",
  border: `1px solid ${theme.palette.gray}`,
  margin: "0 .5rem .5rem 0",
});

const Label = styled(Paragraph)({
  backgroundColor: theme.palette.gray,
  fontSize: ".85rem",
  margin: 0,
  padding: "0.15rem 0.75rem",
});

const Value = styled(Label)({
  backgroundColor: theme.palette.darkGray,
});

export const Pill = ({ label, value }: PillProps) => {
  return (
    <PillContainer>
      <Label>{label}:</Label>
      <Value>{value}</Value>
    </PillContainer>
  );
};
