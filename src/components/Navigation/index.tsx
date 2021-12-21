import styled from "@emotion/styled";
import Spacer from "../Spacer"

const Navigation = () => <Wrapper><Spacer /><div>navigation</div></Wrapper>;

const Wrapper = styled.nav`
  width: 240px;
  height: 100%;
  overflow-y: auto;
  position: fixed;
  top: 0;
  left: 0;
  border-right: 1px solid rgba(0, 0, 0, 0.12);

  display: flex;
  flex-direction: column;
`;

export default Navigation;
