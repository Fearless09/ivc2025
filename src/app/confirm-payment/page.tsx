import prisma from "@/lib/prisma";
import ConfirmPayment from "./components/ConfirmPayment";
import { Member } from "@/utils/Type";

const ConfirmPaymentPage = async () => {
  const member: Member[] = (await prisma.member.findMany()).map((m) => ({
    ...m,
    status: "Paid",
  }));

  return <ConfirmPayment member={member} />;
};

export default ConfirmPaymentPage;
