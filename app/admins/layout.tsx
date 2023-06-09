import AuthRoute from "@/components/AuthRoute";

export const metadata = {
  title: "MIFO | Admin",
  description: "Mahbub Islamic Foundation",
};

export default function AuthRoot({ children }: { children: React.ReactNode }) {
  return <AuthRoute>{children}</AuthRoute>;
}
