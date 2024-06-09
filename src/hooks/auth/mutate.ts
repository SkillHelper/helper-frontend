import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authInstance } from "../../lib/api";

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      await authInstance().get("/auth/logout");
      localStorage.removeItem("accessToken");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) => {
          return query.queryKey[0] === "userinfo";
        },
      });
    },
    onError: (error) => {
      return error;
    },
  });
};
