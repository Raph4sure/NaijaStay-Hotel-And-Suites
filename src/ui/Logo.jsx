import styled from "styled-components";

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
  return (
    <StyledLogo>
      <Img src="/logo-light.png" alt="Logo" />
      <ImageName>Naija&apos;Stay</ImageName>
    </StyledLogo>
  );
}

export default Logo;
