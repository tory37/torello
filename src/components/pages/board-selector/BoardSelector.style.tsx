import styled from "styled-components";

const StyledBoardPreview = styled.div`
  .header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 18px;
      font-weight: 600;
    }

    button {
      svg {
        margin-left: 5px;
      }
    }
  }
`;

export default StyledBoardPreview;
