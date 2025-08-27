import styled from "@emotion/styled";
import { H3 } from "../../utils/styles/typography";
import { Divider } from "../../utils/styles/general";
import { Dropdown } from "../dropdown/Dropdown";

interface FilterNavigationProps {
  title: string;
}

const Container = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Tools = styled.div({
  display: "flex",
  justifyContent: "space-between",
});

export const FilterNavigation = ({ title }: FilterNavigationProps) => {
  return (
    <>
      <Container>
        <H3>{title}</H3>
        <Tools>
          <Dropdown options={[]} label="Sort By" />
        </Tools>
      </Container>
      <Divider />
    </>
  );
};
