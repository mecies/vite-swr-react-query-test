import useSWR from "swr";
import { fetcher } from "../api";
import { User } from "../types/user";

export const useUser = (id: number) => {
  const { data, error } = useSWR<User, { message: string }>(
    `/users/${id}`,
    fetcher
  );

  return {
    user: data,
    loading: !error && !data,
    error,
  };
};
