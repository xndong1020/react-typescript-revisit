import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";

import { fetchRepositoryAsync } from "../actions/repository/actionCreator";

const PackageSearch = () => {
  const [searchTerm, SetSearchTerm] = useState("");

  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(fetchRepositoryAsync(searchTerm));
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const val = evt.target.value;
    if (val && val.trim()) {
      SetSearchTerm(val.trim());
    }
  };
  return (
    <form>
      <input value={searchTerm} onChange={handleChange} />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search Package
      </Button>
    </form>
  );
};

export default PackageSearch;
