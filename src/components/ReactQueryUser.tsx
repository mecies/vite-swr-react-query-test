import { useState } from "react";
import { useQueryClient } from "react-query";
import { useGetUser, useAddUser } from "../hooks/useReactQueryUser";
import User from "./User";

function ReactQueryUser() {
  const [userId, setUserId] = useState(1);
  const { user, error, loading } = useGetUser(userId);
  const mutation = useAddUser();

  const handleNextUser = () => setUserId((prevId) => prevId + 1);

  console.log(mutation);

  if (loading) return <div>loading</div>;
  if (error) return <div>error: {error.message}</div>;
  return (
    <>
      <button onClick={handleNextUser}>next user</button>
      <button onClick={() => mutation.mutate()}>add new user</button>
      {user && <User {...user} />}
    </>
  );
}

export default ReactQueryUser;
