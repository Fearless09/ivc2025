"use server";

import prisma from "@/lib/prisma";
import { Member } from "@/utils/Type";

export const getMembers = async () => {
  const members: Member[] = (await prisma.member.findMany()).map((m) => ({
    ...m,
    status: "Paid",
  }));

  return members;
};

export const addMember = async (
  memberData: Omit<Member, "id" | "status" | "createdAt">,
) => {
  const newMember = await prisma.member.create({
    data: memberData,
  });

  return newMember;
};

export const deleteMemberById = async (id: number) => {
  const deletedMember = await prisma.member.delete({
    where: {
      id,
    },
  });

  return deletedMember;
};
