import AuthNavbar from "@/components/AuthNavbar";


export const metadata = {
  title: "MIFO | Admin",
  description: "Mahbub Islamic Foundation",
};

export default function AuthRoot({ children }: { children: React.ReactNode }) {
  return <>
  <AuthNavbar/>
  {children}
  </>
  
}
