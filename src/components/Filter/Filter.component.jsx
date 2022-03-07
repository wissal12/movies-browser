import React, { useState } from "react";
import {
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  FilterContainer,
  SearchBarContainer,
  SortContainer,
} from "./Filter.style";

const Filter = ({ onSearch, sortOptions }) => {
  const [searchValue, setSearchValue] = useState("");
  const [sortIdx, setSortIdx] = useState("");

  const handleSubmit = (sortBy) => {
    const sortValue = sortIdx === "" ? "" : sortOptions[sortIdx];
    onSearch(searchValue, sortBy ?? sortValue);
  };

  return (
    <FilterContainer>
      <SearchBarContainer>
        <TextField
          value={searchValue}
          label="Search"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon onClick={handleSubmit} />
              </InputAdornment>
            ),
          }}
          onChange={(e) => setSearchValue(e.target.value)}
          onSubmit={handleSubmit}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSubmit();
            }
          }}
        />
      </SearchBarContainer>
      <SortContainer>
        <FormControl fullWidth>
          <InputLabel>Sort</InputLabel>
          <Select label="Sort" value={sortIdx} onChange={() => {}}>
            <MenuItem onClick={() => setSortIdx("")}>
              <em>None</em>
            </MenuItem>
            {sortOptions.map((option, optionIdx) => (
              <MenuItem
                key={option}
                value={optionIdx}
                onClick={() => {
                  setSortIdx(optionIdx);
                  if (searchValue) {
                    handleSubmit(option);
                  }
                }}
              >
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </SortContainer>
    </FilterContainer>
  );
};

export default Filter;
