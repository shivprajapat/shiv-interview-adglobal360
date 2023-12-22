import "./globals.css";

export const metadata = {
  title: "Business Point",
  description: "The government they survive artical of fortune",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-grey-100" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
