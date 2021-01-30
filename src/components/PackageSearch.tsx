import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, CircularProgress } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import { fetchRepositoryAsync } from "../actions/repository/actionCreator";
import { RootState } from "../store/configureStore";
import { RepositoryReducerState } from "../reducers";

const PackageSearch = () => {
  const [searchTerm, SetSearchTerm] = useState("");

  const dispatch = useDispatch();

  const { data, error, isLoading }: RepositoryReducerState = useSelector(
    (state: RootState) => state.repositoryReducer
  );

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
      {isLoading && (
        <div>
          <CircularProgress color="secondary" />
        </div>
      )}
      {error && <Alert severity="error">error</Alert>}
      {!!data.length && data.map((item) => <li key={item}>{item}</li>)}
    </form>
  );
};

export default PackageSearch;
