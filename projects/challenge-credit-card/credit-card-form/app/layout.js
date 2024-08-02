import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Roberta Favuzza" />
      </head>
      <body>{children}</body>
    </html>
  );
}
