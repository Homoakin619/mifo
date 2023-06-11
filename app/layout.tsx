
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import Provider from "@/components/Provider";
import Script from "next/script";

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
        {children}
        </Provider>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"></Script>
      </body>
    </html>
  );
}
