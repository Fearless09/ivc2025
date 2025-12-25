"use client";

import { deleteMemberById } from "@/api/member.controller";
import { useMutation } from "@tanstack/react-query";

export const useDeleteMember = () => {
  const mutation = useMutation({
    mutationKey: ["deleteMember"],
    mutationFn: deleteMemberById,
  });

  return {
    ...mutation,
    deleteMemberAsync: mutation.mutateAsync,
    deleteMember: mutation.mutate,
  };
};
