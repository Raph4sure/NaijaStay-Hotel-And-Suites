import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

const ImageName = styled.p`
    color: var(--color-green-700);
    font-size: 2rem;
    font-weight: 500;
    margin-top: -1rem;
`;

function Logo() {
  const { isDarkMode } = useDarkMode()
  

// Will change the image later based on the mode it is.
const src = isDarkMode ? "/logo-light.png" : "/logo-light.png";

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
      <ImageName>Naija&apos;Stay</ImageName>
    </StyledLogo>
  );
}




export default Logo;
