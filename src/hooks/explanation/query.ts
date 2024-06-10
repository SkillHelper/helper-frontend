import { useQuery } from "@tanstack/react-query";
import { authInstance } from "../../lib/api";

export interface Explanation {
  uuid: string;
  title: string;
  link: string;
  createdAt: string;
  updatedAt: string;
}

export function useExplanation() {
  return useQuery<Explanation[]>({
    queryKey: ["explanation"],
    queryFn: async () => {
      const { data } = await authInstance().get<Explanation[]>("/explanation");
      return data;
    },
  });
}

export function useExplanationByUUID(uuid: string) {
  return useQuery<Explanation>({
    queryKey: ["explanation", uuid],
    queryFn: async () => {
      const { data } = await authInstance().get<Explanation>(
        `/explanation/${uuid}`
      );
      return data;
    },
  });
}
