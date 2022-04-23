import { useState } from "react";
import useSWR from "swr";
import { fetcher } from "../api";
import { useUser } from "../hooks/useSwrUser";
import User from "./User";

function SwrUser() {
  const [userId, setUserId] = useState(1);
  const { user, loading, error } = useUser(userId);
  const { data: posts } = useSWR(() => "/posts?userId=" + userId, fetcher);

  const handleNextUser = () => setUserId((prevId) => prevId + 1);

  console.log({ posts });

  if (loading) return <div>loading</div>;
  if (error) return <div>error: {error.message}</div>;
  return (
    <>
      <button onClick={handleNextUser}>next user</button>
      {user && <User {...user} />}
    </>
  );
}

export default SwrUser;
