import { useQuery } from "@tanstack/react-query";
import { authInstance } from "../../lib/api";

export interface User {
  uuid: string;
  email: string;
  username: string;
  displayName: string;
  clientId: string;
  profileImage: string;
  refreshToken: string;
  createdAt: Date;
  updatedAt: Date;
}

export function useUserInfo() {
  return useQuery<User>({
    queryKey: ["userinfo"],
    queryFn: async () => {
      const { data } = await authInstance().get<User>("/auth");
      return data;
    },
  });
}
