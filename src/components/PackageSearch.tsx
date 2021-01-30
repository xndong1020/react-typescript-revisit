import React, { useState } from "react";
import { Button } from "@material-ui/core";

const PackageSearch = () => {
  const [searchTerm, SetSearchTerm] = useState("");

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const val = evt.target.value;
    if (val && val.trim()) {
      SetSearchTerm(val.trim());
    }
  };
  return (
    <form>
      <input value={searchTerm} onChange={handleChange} />
      <Button variant="contained" color="primary" onClick={() => {}}>
        Search Package
      </Button>
    </form>
  );
};

export default PackageSearch;
