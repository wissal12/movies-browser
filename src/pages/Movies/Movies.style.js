import styled from "styled-components";
import {
  FILTER_HEIGHT,
  FILTER_MIN_HEIGHT,
} from "../../components/Filter/Filter.style";
import CircularProgress from "@mui/material/CircularProgress";

const WELCOME_OFFSET = "50%";

export const WelcomeText = styled.div`
  position: absolute;
  top: max(
    calc(${FILTER_HEIGHT} + ${WELCOME_OFFSET}),
    calc(${FILTER_MIN_HEIGHT} + ${WELCOME_OFFSET})
  );
  left: 45%;
`;

export const ErrorContainer = styled(WelcomeText)`
  color: red;
  font-weight: bold;
`;

export const Loader = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  left: 50%;
`;
