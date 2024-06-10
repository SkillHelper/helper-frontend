import { useQuery } from "@tanstack/react-query";
import { authInstance } from "../../lib/api";

// export interface Notice {
//   uuid: string;
//   email: string;
//   username: string;
//   profileImage: string;
//   refreshToken: string;
//   createdAt: Date;
//   updatedAt: Date;
// }

export interface Notice {
  date: string;
  division: string;
  download: string;
  title: string;
}

interface noticeQuery {
  category?: string;
}
export function useNotices(params: noticeQuery = {}) {
  return useQuery<Notice[]>({
    queryKey: ["notice", params.category],
    queryFn: async () => {
      const { data } = await authInstance().get<Notice[]>("/notice", {
        params,
      });
      return data;
    },
  });
}
