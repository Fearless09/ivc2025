import ConfirmPayment from "./components/ConfirmPayment";
import { getMembers } from "@/api/member.controller";

const ConfirmPaymentPage = async () => {
  const member = await getMembers();

  return <ConfirmPayment member={member} />;
};

export default ConfirmPaymentPage;
