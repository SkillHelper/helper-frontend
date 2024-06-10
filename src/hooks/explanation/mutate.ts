import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authInstance } from "../../lib/api";

interface CreateExplanationDto {
  title: string;
  link: string;
}

interface UpdateExplanationDto extends Partial<CreateExplanationDto> {
  uuid: string;
}

export const useCreateExplanation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (body: CreateExplanationDto) => {
      await authInstance().post("/explanation", body);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) => {
          return query.queryKey[0] === "explanation";
        },
      });
    },
    onError: (error) => {
      return error;
    },
  });
};

export const useUpdateExplanation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (body: UpdateExplanationDto) => {
      await authInstance().patch(`/explanation/${body.uuid}`, body);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) => {
          return query.queryKey[0] === "explanation";
        },
      });
    },
    onError: (error) => {
      return error;
    },
  });
};

export const useDeleteExplanation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (uuid: string) => {
      await authInstance().delete(`/explanation/${uuid}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) => {
          return query.queryKey[0] === "explanation";
        },
      });
    },
    onError: (error) => {
      return error;
    },
  });
};
