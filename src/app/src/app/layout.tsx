import "./globals.css";
export const metadata = { title: "Diwan", description: "Diwan App" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
