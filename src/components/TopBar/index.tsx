import styled from "@emotion/styled";

const TopBar = () => <Wrapper>Betsy Losen</Wrapper>;

const Wrapper = styled.div`
  width: 100%;
  height: 5em;
  position: fixed;
  top: 0;
  left: auto;
  right: 0;
  z-index: 1100;
  background-color: pink;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px,
    rgb(0 0 0 / 12%) 0px 1px 10px 0px;
`;

export default TopBar;
