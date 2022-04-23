import { useQuery, useMutation } from "react-query";
import { apiClient } from "../api";
import { User } from "../types/user";

const getUserById = async (userId: number) => {
  const { data } = await apiClient.get(`/users/${userId}`);
  return data;
};

const addUser = () =>
  apiClient.post<User>(`/users`, {
    name: "name",
    username: "username",
    email: "email",
  });

export const useGetUser = (id: number) => {
  const {
    data: user,
    error,
    isLoading: loading,
  } = useQuery<User, { message: string }>(["user", id], () => getUserById(id));

  return { user, error, loading };
};

export const useAddUser = () => useMutation(addUser);
