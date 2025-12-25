export interface Member {
  id: string;
  fullName: string;
  email: string;
  registrationDate: string;
  status: "Paid" | "Pending";
}

export enum Page {
  Home = "home",
  ConfirmPayment = "confirm-payment",
  Admin = "admin",
}

export interface AdminUser {
  isAuthenticated: boolean;
  username: string | null;
}
