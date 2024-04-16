import PapelNavbar from "../components/Papel/PapelNavbar";
import "../globals.css";
export const metadata = {
  title: "Harridui | Tipos de papel",
  description: "Harridui | Taller de serigrafía",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <PapelNavbar />
        {children}
      </body>
    </html>
  );
}
