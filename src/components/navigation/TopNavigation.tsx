import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { theme } from "../../utils/styles/theme";
import { useEffect, useState } from "react";
import starCatsLogo from "../../assets/images/svg/starcats.svg";
import catIcon from "../../assets/images/svg/cat-icon.svg";
import catBedIcon from "../../assets/images/svg/cat-bed-icon.svg";
import { Breakpoint } from "../../utils/types/enums/breakpoint";

const Navigation = styled.nav<{ hasScrolled: boolean }>(({ hasScrolled }) => ({
  display: "flex",
  height: 60,
  marginBottom: "4rem",
  position: "sticky",
  top: 0,
  background: theme.palette.black,
  zIndex: 2,
  borderBottom: `1px solid ${hasScrolled ? theme.palette.gray : "transparent"}`,
  [`@media (min-width: ${Breakpoint.DESKTOP})`]: {
    height: 80,
  },
}));

const ItemsContainer = styled.div({
  display: "flex",
  alignItems: "center",
  width: "100%",
  justifyContent: "flex-end",
});

const Item = styled(Link)({
  textDecoration: "none",
  color: theme.palette.white,
  fontSize: 20,
  marginLeft: ".5rem",
  borderBottom: "2px solid transparent",
  padding: ".5rem",
  ":hover": {
    borderBottomColor: theme.palette.white,
    color: theme.palette.white,
  },
  img: {
    marginRight: ".25rem",
  },
  [`@media (min-width: ${Breakpoint.DESKTOP})`]: {
    marginLeft: "1.75rem",
    img: {
      marginRight: ".5rem",
    },
  },
});

const Logo = styled.img<{ minimize: boolean }>(({ minimize }) => ({
  marginTop: ".75rem",
  height: minimize ? 60 : 70,
  transition: "all 0.15s ease-in-out",
  [`@media (min-width: ${Breakpoint.DESKTOP})`]: {
    height: minimize ? 80 : 110,
  },
}));

const NavIcon = styled.img({
  width: 20,
  height: 20,
});

export const TopNavigation = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navigation hasScrolled={hasScrolled}>
      <Logo minimize={hasScrolled} src={starCatsLogo} alt="Star Cats logo" />

      <ItemsContainer>
        <Item to={"/"}>
          <NavIcon src={catBedIcon} alt="Home" />
          Home
        </Item>
        <Item to={"/bucket"}>
          <NavIcon src={catIcon} alt="Characters" />
          Characters
        </Item>
      </ItemsContainer>
    </Navigation>
  );
};
