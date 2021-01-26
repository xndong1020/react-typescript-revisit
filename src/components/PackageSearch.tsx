import React, { useState, useCallback } from "react";
import { Button } from "@material-ui/core";
import { fetchRepositoryAsync } from "../actions/repositoryActions";

const PackageSearch = () => {
  const [searchTerm, SetSearchTerm] = useState("");

  const fetchPackage = useCallback(
    () => fetchRepositoryAsync(searchTerm),
    [searchTerm]
  );

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const val = evt.target.value;
    if (val && val.trim()) {
      SetSearchTerm(val.trim());
    }
  };
  return (
    <form>
      <input value={searchTerm} onChange={handleChange} />
      <Button variant="contained" color="primary" onClick={fetchPackage}>
        Search Package
      </Button>
    </form>
  );
};

export default PackageSearch;
