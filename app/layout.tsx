import "./globals.css";

export const metadata = {
  title: "Nathan-niversaire",
  description: "Compteur avant le grand jour",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
