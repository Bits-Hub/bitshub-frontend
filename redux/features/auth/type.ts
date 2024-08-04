// revisit this based on the actual response from the server


type User = {
    email?: string;
    id?: string;
    name?: string;
  };
  

export type Auth = {
    user: User;
    token?: string;
  };