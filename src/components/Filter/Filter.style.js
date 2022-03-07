import styled from "styled-components";

export const FILTER_HEIGHT = "20vh";
export const FILTER_MIN_HEIGHT = "100px";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: ${FILTER_HEIGHT};
  min-height: ${FILTER_MIN_HEIGHT};
`;

export const SearchBarContainer = styled.div`
  width: 30%;
`;

export const SortContainer = styled.div`
  width: 15%;
`;
