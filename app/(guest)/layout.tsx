import Navbar from "@/components/Navbar";


export const metadata = {
  title: "MIFO",
  description: "Mahbub Islamic Foundation",
};

export default function AuthRoot({ children }: { children: React.ReactNode }) {
  return <>
  <Navbar/>
  {children}
  </>
  
}
