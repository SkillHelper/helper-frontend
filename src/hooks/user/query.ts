import { useQuery } from "@tanstack/react-query";
import { authInstance } from "../../lib/api";
import { User } from "../auth";

export function useUsers() {
  return useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await authInstance().get<User[]>("/user");
      return data;
    },
  });
}
