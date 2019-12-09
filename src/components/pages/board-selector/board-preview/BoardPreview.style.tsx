import styled from "styled-components";

const StyledBoardPreview = styled.div<{ color: string }>`
  background-color: ${props => props.color};
  width: 100px;
  height: 30px;
  text-align: center;
  vertical-align: center;
  font-size: 16px;
  color: white;
`;

StyledBoardPreview.defaultProps = {
  color: "purple"
};

export default StyledBoardPreview;
