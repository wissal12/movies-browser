import styled from "styled-components";
import { Grid } from "@mui/material";
import { fontSize, color } from "../../stylesheet";

export const MovieContainer = styled(Grid)`
  background: ${color.secondaryBackground};
  && {
    width: unset;
    margin: 0 10%;
  }
`;

export const TitleContainer = styled(Grid)`
  font-weight: bold;
  font-size: ${fontSize.mainHeader};
`;

export const Poster = styled.img`
  max-height: 300px;
`;

export const Plot = styled(Grid)`
  max-width: 90%;
`;

export const CommentContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Comment = styled.span`
  padding-right: 20px;
`;
