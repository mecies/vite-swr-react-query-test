import { User as UserType } from "../types/user";

type Props = UserType;

function User({ email, id, name, username }: Props) {
  return (
    <div>
      <pre>{id}</pre>
      <div>{email}</div>
      <div>{name}</div>
      <div>{username}</div>
    </div>
  );
}

export default User;
