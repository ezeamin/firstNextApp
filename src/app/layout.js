import Navigation from '../components/navigation/Navigation';

import "../styles/globals.css"

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
