"use client";
import { getMembers } from "@/api/memberFunc";
import { useQuery } from "@tanstack/react-query";

export const useGetMembers = () => {
  const query = useQuery({
    queryKey: ["members"],
    queryFn: getMembers,
  });

  return { ...query, members: query.data || [] };
};
