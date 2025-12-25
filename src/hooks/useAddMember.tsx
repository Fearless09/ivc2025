"use client";

import { addMember } from "@/api/member.controller";
import { useMutation } from "@tanstack/react-query";

export const useAddMember = () => {
  const mutation = useMutation({
    mutationKey: ["addMember"],
    mutationFn: addMember,
  });

  return {
    ...mutation,
    addMemberAsync: mutation.mutateAsync,
    addMember: mutation.mutate,
  };
};
