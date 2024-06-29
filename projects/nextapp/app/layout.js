import './globals.css';

export const metadata = {
  title: 'Todo App',
  description: 'Con un counter facile facile',
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
