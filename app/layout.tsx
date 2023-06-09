import Navbar from "@/components/Navbar";

import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import Provider from "@/components/Provider";

export const metadata = {
  title: "MIFO",
  description: "Mahbub Islamic Foundation",
};

export default function RootLayout({
  children,
  session
}: {
  children: React.ReactNode;
  session: any
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Sigmar&family=Signika:wght@600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Provider session={session} >
        <Navbar />
        {children}
        </Provider>
      </body>
    </html>
  );
}
