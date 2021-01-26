import { Button, Typography } from "@material-ui/core";
import { useState } from "react";

interface User {
  name: string;
  age: number;
}

const UserSearch = () => {
  const initUsers: User[] = [
    {
      name: "Sarah",
      age: 18,
    },
    {
      name: "Alex",
      age: 20,
    },
    {
      name: "Michael",
      age: 18,
    },
  ];

  const [name, setName] = useState("");
  const [guest, setGuest] = useState<User>();

  const onClick = () => {
    const guest: User | undefined = initUsers.find(
      (user) => user.name === name
    );
    setGuest(guest);
  };

  return (
    <div>
      <Typography variant="h6">Find User</Typography>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button variant="contained" onClick={onClick}>
        Find
      </Button>
      <Typography variant="h6">User Details</Typography>
      {!guest && <div>Not Found</div>}
      <div>{guest?.name}</div>
    </div>
  );
};

export default UserSearch;
