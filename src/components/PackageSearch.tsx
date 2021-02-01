import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, CircularProgress } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import { useActions } from "../hooks/useActions";
import { RootState } from "../store/configureStore";
import { RepositoryAction } from "../reducers";

const PackageSearch = () => {
  const [searchTerm, SetSearchTerm] = useState("");

  const { fetchRepositoryAsync } = useActions<RepositoryAction>();

  const { data, error, isLoading } = useSelector(
    (state: RootState) => state.repositoryReducer
  );

  const handleSearch = () => {
    fetchRepositoryAsync(searchTerm);
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
